"use client";
import { Tags } from "@/components/feedstock/tags";
import { Feedstock } from "@/types/types";
//import { Column, Row } from '@carbonplan/components'
import { Box, Text } from "theme-ui";

export const DatasetDescription: React.FC<{ feedstock: Feedstock }> = ({
  feedstock,
}) => {
  return (
    <>
      <Box sx={{ mt: 2 }}>
        {feedstock.tags && (
          <Box sx={{ mt: 3 }}>
            <Tags tags={feedstock.tags} />
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

      <Box sx={{ fontSize: [2, 2, 2, 3], mt: 3 }}>{feedstock.description}</Box>
    </>
  );
};
