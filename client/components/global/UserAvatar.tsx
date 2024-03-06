"use client";

import axiosInstance from "@/app/axiosInstance";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserAvatar({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    async function getAvatar() {
      try {
        const response = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/files/getProfilePicture/${email}`,
          {
            responseType: "blob",
          },
        );

        if (response.status === 200) {
          const url = URL.createObjectURL(response.data);
          setAvatar(url);
        }
      } catch (e) {
        setAvatar(null);
      }
    }

    getAvatar();
  }, [email]);

  // Fallback to user name initial in case of no avatar
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-300">
      {avatar ? (
        <Image
          src={avatar}
          width={40}
          height={40}
          alt={name}
          className="h-full w-full rounded-full"
        />
      ) : (
        <span className="text-xl font-medium text-primary-300">
          {firstLetter}
        </span>
      )}
    </div>
  );
}
