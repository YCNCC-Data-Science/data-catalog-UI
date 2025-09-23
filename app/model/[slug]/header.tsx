"use client";
import { BackButton } from "@/components/back-button";
import { Model } from "@/types/types";
import { alpha } from "@theme-ui/color";
import { Box, Container } from "theme-ui";

export const ModelHeader: React.FC<{ model: Model }> = ({ model }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: ["200px", "200px", "225px", "200x"],
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        as="img"
        // @ts-expect-error
        src={model.thumbnail}
        alt={`${model.title} thumbnail`}
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          filter: "grayscale(100%)",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          backgroundColor: alpha(model.color, 0.5),
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: 0.8,
        }}
      />
      <Container
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: ["30px", "34px", "38px", "42px"],
          }}
        >
          <BackButton
            sx={{
              color: "white",

              mt: [0, 0, "26px", "28px"],
            }}
            preserveQuery
          />
          {model.title}
        </Box>
      </Container>
    </Box>
  );
};
