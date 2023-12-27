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
        { "px-4 md:px-72": !large, "px-4 md:px-32": large },
        classes
      )}
    >
      {children}
    </div>
  );
}
