"use client";

/*
this does not work correctly
*/

import { MdOutlineArrowOutward, MdOutlineArrowForward } from "react-icons/md";

export const RotatingArrow: React.FC<{ size?: number }> = ({ size = 20 }) => {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-flex",
        width: size,
        height: size,
      }}
    >
      <MdOutlineArrowOutward
        size={size}
        className="arrow-outward"
        style={{ position: "absolute", inset: 0 }}
      />
      <MdOutlineArrowForward
        size={size}
        className="arrow-forward"
        style={{ position: "absolute", inset: 0, opacity: 0 }}
      />
    </span>
  );
};
