import React from "react";
import { ReactNode } from "react";
import { Box, ThemeUIStyleObject } from "theme-ui";
import { transparentize } from "@theme-ui/color";

interface BadgeProps {
  sx?: ThemeUIStyleObject & { color?: string };
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ sx: customSx, children, ...props }) => {
  const color = customSx?.color ?? "primary";
  return (
    <Box
      sx={{
        display: "inline-block",
        width: "fit-content",
        height: ["24px", "24px", "24px", "26px"],
        borderRadius: "5px",
        backgroundColor:
          color === "primary" || color === "secondary"
            ? "muted"
            : transparentize(color, 0.7),
        textAlign: "center",
        userSelect: "none",
        fontSize: [2, 2, 2, 3],
        ...customSx,
      }}
      {...props}
    >
      <Box
        sx={{
          letterSpacing: "0.02em",
          fontFamily: "mono",
          mt: ["1px", "1px", "1px", "0px"],
          px: [1, 1, 1, "5px"],
          color,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Badge;
