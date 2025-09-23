"use client";

import { Thumbnail } from "@/components/feedstock/thumbnail";
import { Model } from "@/types/types";
import { alpha } from "@theme-ui/color";
import Link from "next/link";
import { Box, Flex, Text, Heading } from "theme-ui";

interface ModelCardProps {
  feedstock: Model;
  catalog?: string;
}

export const ModelCard: React.FC<ModelCardProps> = ({ feedstock, catalog }) => {
  const { slug, description, tags, thumbnail, color, title } = feedstock;

  const truncateDescription = (text: string, maxLength: number) =>
    text.length <= maxLength ? text : text.slice(0, maxLength).trim() + "...";

  const truncatedDescription = truncateDescription(description, 200);

  return (
    <Link
      href={catalog ? `/model/${slug}?catalog=${catalog}` : `/model/${slug}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
        height: "100%",
      }}
    >
      <Box
        id={slug}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transition: "all 0.3s ease",
          m: -2,
          p: 2,
          ":hover": { backgroundColor: alpha(color, 0.1) },
        }}
      >
        <Box sx={{ flex: "0 0 auto", position: "relative" }}>
          <Thumbnail url={thumbnail} color={color} tags={tags} />
        </Box>

        <Flex
          sx={{
            flexDirection: "column",
            flex: "1 1 auto",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Heading
              as="h2"
              sx={{
                fontSize: [3, 3, 3, 4],
                fontFamily: "heading",
                fontWeight: "bold",
                color: "text",
                mb: 2,
                pt: "2px",
                mt: 2,
              }}
            >
              {title}
            </Heading>

            <Box sx={{ mb: 2 }}>
              <Text sx={{ fontSize: [2, 2, 2, 3] }}>
                {truncatedDescription}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};
