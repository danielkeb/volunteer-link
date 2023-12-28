import clsx from "clsx";
import React from "react";

export default function Button({
  variant,
  size,
  disabled,
  icon,
  text,
  classes,
}: {
  variant: "filled" | "text" | "outlined";
  size: "xs" | "sm" | "base" | "lg" | "xl";
  disabled?: boolean;
  icon?: React.ReactNode;
  text: string;
  classes?: string;
}) {
  return (
    <button
      className={clsx(
        {
          "cursor-not-allowed bg-bg-300 text-text-100":
            variant === "filled" && disabled,
          "border-2 border-accent-200 bg-accent-200 text-bg-100 hover:bg-opacity-80":
            variant === "filled" && !disabled,
          "border-2 border-accent-200 text-accent-200 hover:bg-accent-200 hover:text-bg-100":
            variant === "outlined" && !disabled,
          "cursor-not-allowed border-2 border-bg-300 text-bg-300":
            variant === "outlined" && disabled,
          "border border-bg-100 text-accent-200 hover:border hover:border-accent-100":
            variant === "text" && !disabled,
          "cursor-not-allowed text-bg-300": variant === "text" && disabled,
        },
        { classes },
        `rounded px-4 py-2 text-${size} flex flex-row items-center justify-center gap-4 duration-200`,
      )}
    >
      {icon && <div>{icon}</div>}
      {text}
    </button>
  );
}
