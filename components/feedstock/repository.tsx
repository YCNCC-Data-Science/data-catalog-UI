import { Button, Box, Text } from "theme-ui";

interface RepositoryProps {
  metaURL?: string;
}

function getOrgAndRepo(url: string): string {
  const urlParts = url.split("/");
  const org = urlParts[3];
  const repo = urlParts[4];
  return `${org}/${repo}`;
}

export const Repository: React.FC<RepositoryProps> = ({ metaURL }) => {
  if (!metaURL) {
    return null;
  }

  const orgAndRepo = getOrgAndRepo(metaURL);
  const githubUrl = `https://github.com/${orgAndRepo}`;

  return (
    <Box>
      <Box sx={{ mb: 2, mt: 2 }}>
        {" "}
        <Text
          sx={{
            color: "muted",
            fontSize: 0,
            fontFamily: "mono",
            letterSpacing: "mono",
            textTransform: "uppercase",
          }}
        >
          Repository
        </Text>
      </Box>

      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Button
          sx={{
            fontSize: 0,
            px: 2,
            py: 1,
            bg: "muted",
            "&:hover": { bg: "black" },
          }}
        >
          {orgAndRepo}
        </Button>
      </a>
    </Box>
  );
};
