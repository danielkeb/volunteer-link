"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";

const Snackbar = ({
  message,
  type,
  duration = 300,
  setSnackbar,
}: {
  message: string;
  type: "info" | "warning" | "success" | "error";
  duration?: number;
  setSnackbar: React.Dispatch<
    React.SetStateAction<{
      message: string;
      type: "info" | "warning" | "success" | "error";
      duration: number;
    } | null>
  >;
}) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    setShowSnackbar(true);
    const timer = setTimeout(() => {
      setSnackbar(null);
      setShowSnackbar(false);
    }, duration || 3000);
    return () => clearTimeout(timer);
  }, [duration, setSnackbar]);

  const types = {
    success: "bg-success",
    info: "bg-info",
    warning: "bg-warning",
    error: "bg-error",
  };

  return (
    <div
      className={clsx(
        showSnackbar ? "-translate-y-0" : "-translate-y-56",
        "fixed right-8 top-8 flex max-w-96 transform flex-row items-start gap-4 text-pretty rounded px-4 py-2 text-lg leading-tight text-bg-100 shadow-xl transition-transform duration-500",
        types[type],
      )}
    >
      <p>{message}</p>

      <BiX
        size={32}
        onClick={() => {
          setSnackbar(null);
          setShowSnackbar(false);
        }}
      />
    </div>
  );
};

export default Snackbar;
