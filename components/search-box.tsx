"use client";

import { Container, Input, Box, Text } from "theme-ui";

interface SearchBoxProps {
  sx?: React.CSSProperties;
  search: string;
  setSearch: (value: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ search, setSearch }) => {
  return (
    <Container sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          width: ["100%", "100%", "50%"],
          mx: "auto",
        }}
      >
        <Text
          sx={{
            mr: 2,
            fontSize: 3,
            color: "muted",
            pb: "2px",
            whiteSpace: "nowrap",
          }}
        >
          Search:
        </Text>
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            flex: 1,
            border: "none",
            borderBottom: "1px solid",
            borderColor: "muted",
            borderRadius: 0,
            outline: "none",
            bg: "transparent",
            px: 0,
            py: 0,
            fontSize: 3,
            lineHeight: "1.5",
            "&:focus": {
              borderColor: "primary",
            },
          }}
        />
      </Box>
    </Container>
  );
};
