"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Container, Text } from "theme-ui";

export const Header = () => {
  const pathname = usePathname();

  return (
    <Container
      as="header"
      sx={{
        borderBottom: "1px solid",
        borderColor: "muted",
        py: 3,
        px: 3,
        position: "fixed",
        top: 0,
        zIndex: 100,
        width: "100%",
        backdropFilter: "saturate(180%) blur(5px)",
        backgroundColor: "background",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flex: "0 0 auto" }}>
        <Link href="/">
          <Image
            src="/ycncc-logo.png"
            width={160}
            height={30}
            alt="YCNCC Logo"
          />
        </Link>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 4,
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Text
            as="span"
            sx={{
              px: 2,
              borderRadius: "md",
              border: "1px solid transparent",
              color: pathname === "/" ? "background" : "muted",
              bg: pathname === "/" ? "muted" : "transparent",
              fontSize: [3, 4],
              fontFamily: "heading",
              letterSpacing: "heading",
              textTransform: "uppercase",
              cursor: "pointer",
              "&:hover": { borderColor: "black" },
            }}
          >
            Datasets
          </Text>
        </Link>

        <Link href="/model-catalog" style={{ textDecoration: "none" }}>
          <Text
            as="span"
            sx={{
              px: 2,
              borderRadius: "md",
              border: "1px solid transparent",
              color: pathname === "/model-catalog" ? "background" : "muted",
              bg: pathname === "/model-catalog" ? "muted" : "transparent",
              fontSize: [3, 4],
              fontFamily: "heading",
              letterSpacing: "heading",
              textTransform: "uppercase",
              cursor: "pointer",
              "&:hover": { borderColor: "black" },
            }}
          >
            Models
          </Text>
        </Link>
      </Box>

      <Box sx={{ flex: "0 0 auto", width: 160 }} />
    </Container>
  );
};
