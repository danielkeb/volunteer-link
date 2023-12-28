import clsx from "clsx";
import React from "react";

export default function Container({
  children,
  classes,
  large,
}: {
  children: React.ReactNode;
  classes?: String;
  large?: boolean;
}) {
  return (
    <div
      className={clsx(
        {
          "px-4 sm:px-16 md:px-16 lg:px-32 xl:px-64": !large,
          "px-4 sm:px-8 md:px-8 lg:px-16 xl:px-32": large,
        },
        classes,
      )}
    >
      {children}
    </div>
  );
}
