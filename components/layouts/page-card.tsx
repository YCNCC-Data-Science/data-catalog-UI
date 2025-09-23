"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Box, Flex } from "theme-ui";
import { useEffect, useState } from "react";

function PageCard({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setMounted(true);
    setHeight(window.innerHeight);
  }, []);

  if (!mounted) return null; // or a loader/spinner

  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: `${height}px`,
        justifyContent: "space-between",
        gap: 0,
      }}
    >
      <Header />
      <Box sx={{ mt: "60px" }}>{children}</Box>
      <Footer />
    </Flex>
  );
}

export default PageCard;
