"use client";

import { Box, Container, Text } from "theme-ui";

type CatalogNameProps = {
  catalog: string;
};

export default function CatalogName({ catalog }: CatalogNameProps) {
  return (
    <Container>
      <Box as="section" sx={{ pt: 3 }}>
        <Text
          sx={{
            color: "primary",
            fontSize: [4, 4, 4, 6],
            fontFamily: "heading",
            width: "100%",
          }}
        >
          {catalog}
        </Text>
      </Box>
    </Container>
  );
}
