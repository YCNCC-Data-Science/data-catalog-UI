import { Button, Box, Text } from "theme-ui";

interface LicenseProps {
  license: string;
  license_link?: string;
}

export const License: React.FC<LicenseProps> = ({ license, license_link }) => {
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
          License
        </Text>
      </Box>

      <a href={license_link} target="_blank" rel="noopener noreferrer">
        <Button
          sx={{
            fontSize: 0,
            px: 2,
            py: 1,
            bg: "muted",
            "&:hover": { bg: "black" },
          }}
        >
          {license}
        </Button>
      </a>
    </Box>
  );
};
