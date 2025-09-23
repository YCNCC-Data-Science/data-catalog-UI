"use client";
import { Tags } from "@/components/feedstock/tags";
import { Model } from "@/types/types";
import { Box, Text } from "theme-ui";

export const ModelDescription: React.FC<{ model: Model }> = ({ model }) => {
  return (
    <>
      <Box sx={{ mt: 2 }}>
        {model.tags && (
          <Box sx={{ mt: 3 }}>
            <Tags tags={model.tags} />
          </Box>
        )}
      </Box>

      <Text
        as="p"
        sx={{
          mt: 3,
          mb: 3,
          color: "muted",
          fontSize: [3, 4],
          fontFamily: "mono",
          letterSpacing: "mono",
          textTransform: "uppercase",
        }}
      >
        Description
      </Text>

      <Box sx={{ fontSize: [2, 2, 2, 3], mt: 3 }}>{model.description}</Box>
    </>
  );
};
