/** @jsxImportSource theme-ui */
import { ThemeUIStyleObject } from "theme-ui";

interface DividerProps {
  color?: string;
  sx?: ThemeUIStyleObject;
}

export const SectionDivider: React.FC<DividerProps> = ({
  color = "gray",
  sx = {},
}) => {
  return (
    <>
      <hr
        sx={{
          width: "100%",
          borderTop: "1px solid",
          borderColor: color,
          ...sx,
        }}
      />
    </>
  );
};
