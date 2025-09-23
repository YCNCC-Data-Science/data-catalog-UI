import { Button, Box, Text } from "theme-ui";

interface DataAccessProps {
  doi: string;
  url?: string;
}

export const AccessLink: React.FC<DataAccessProps> = ({ doi, url }) => {
  return (
    <Box>
      <Box sx={{ mb: 2, mt: 2 }}>
        <Text
          sx={{
            color: "muted",
            fontSize: 0,
            fontFamily: "mono",
            letterSpacing: "mono",
            textTransform: "uppercase",
          }}
        >
          Access Link
        </Text>
      </Box>

      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button
          sx={{
            fontSize: 0,
            px: 2,
            py: 1,
            bg: "muted",
            "&:hover": { bg: "black" },
          }}
        >
          {doi}
        </Button>
      </a>
    </Box>
  );
};
