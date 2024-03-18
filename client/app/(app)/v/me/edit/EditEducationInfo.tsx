"use client";

import { AuthContext } from "@/app/lib/contexts/AppContext";
import Button from "@/components/global/Button";
import Card from "@/components/global/Card";
import { format } from "date-fns";
import { useContext } from "react";
import { BiSolidPencil, BiSolidTrashAlt } from "react-icons/bi";

export default function EditEducationInfo() {
  const { user } = useContext(AuthContext);

  return (
    <div className="space-y-1">
      <p>Education Information</p>

      <Card classes="space-y-6">
        {user &&
          user?.education?.map((item: any) => (
            <div key={item.id} className="flex flex-row items-center gap-8">
              <div className="space-y-1 py-2">
                <div>
                  <span className="block text-xl">{item.field}</span>
                  <div>
                    <span className="text-lg">{item.institute}</span>
                    <span className="px-3 text-text-200">
                      {`${format(item.startDate, "MMMM yyyy")}`}
                      {" - "}
                      {item.endDate
                        ? `${format(item.endDate, "MMMM yyyy")}`
                        : "present"}
                    </span>
                  </div>
                </div>
                <p className="line-clamp-1 font-light text-text-200">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-row gap-2">
                <BiSolidPencil size={20} />
                <BiSolidTrashAlt size={20} />
              </div>
            </div>
          ))}

        <Button variant="filled" size="base" text="Add education info" />
      </Card>
    </div>
  );
}
