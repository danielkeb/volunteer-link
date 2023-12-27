import clsx from "clsx";
import React from "react";

export default function Button({
  variant,
  size,
  disabled,
  icon,
  text,
}: {
  variant: "filled" | "text" | "outlined";
  size: "xs" | "sm" | "base" | "lg" | "xl";
  disabled?: boolean;
  icon?: React.ReactNode;
  text: string;
}) {
  return (
    <button
      className={clsx(
        {
          "bg-bg-300 cursor-not-allowed text-text-100":
            variant === "filled" && disabled,
          "bg-accent-200 hover:bg-opacity-80 border-2 border-accent-200 text-bg-100":
            variant === "filled" && !disabled,
          "border-2 border-accent-200 text-accent-200 hover:bg-accent-200 hover:text-bg-100":
            variant === "outlined" && !disabled,
          "border-2 border-bg-300 text-bg-300 cursor-not-allowed":
            variant === "outlined" && disabled,
          "text-accent-200 hover:border border border-bg-100 hover:border-accent-100":
            variant === "text" && !disabled,
          "text-bg-300 cursor-not-allowed": variant === "text" && disabled,
        },
        `px-4 py-2 rounded text-${size} duration-200 flex gap-4 flex-row items-center justify-center`
      )}
    >
      {icon && <div>{icon}</div>}
      {text}
    </button>
  );
}
