"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "theme-ui";
import { ThemeUIStyleObject } from "theme-ui";
import { FaArrowLeftLong } from "react-icons/fa6";

interface BackButtonProps {
  href?: string;
  preserveQuery?: boolean;
  sx?: ThemeUIStyleObject;
}

export const BackButton: React.FC<BackButtonProps> = ({
  href = "/",
  preserveQuery = false,
  sx,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    if (preserveQuery) {
      const currentParams = new URLSearchParams(searchParams.toString());
      const newUrl = `${href}${
        currentParams.toString() ? "?" + currentParams.toString() : ""
      }`;
      router.push(newUrl);
    } else {
      router.push(href);
    }
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 2,
        px: 3,
        py: 2,
        fontWeight: "bold",
        fontSize: 3,
        cursor: "pointer",
        bg: "transparent",
        "&:hover": {
          bg: "muted",
        },
        ...sx,
      }}
    >
      <FaArrowLeftLong size={24} />
    </Button>
  );
};
