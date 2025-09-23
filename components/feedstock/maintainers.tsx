import { Maintainer } from "@/types/types";
import { Avatar, Box, Flex, Text } from "theme-ui";

interface MaintainersProps {
  maintainers: Maintainer[];
}

export const Maintainers: React.FC<MaintainersProps> = ({ maintainers }) => {
  const sortedMaintainers = maintainers.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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
          Maintainers
        </Text>
      </Box>

      <Flex sx={{ flexDirection: "row", gap: 2 }}>
        {sortedMaintainers.map((maintainer, i) => (
          <a
            key={i}
            href={`https://github.com/${maintainer.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Flex
              sx={{ flexDirection: "column", gap: 2, alignItems: "center" }}
            >
              <Avatar
                src={maintainer.image_url}
                alt={`${maintainer.name}'s avatar`}
                sx={{ width: 48, height: 48, borderRadius: "50%" }}
              />
            </Flex>
          </a>
        ))}
      </Flex>
    </Box>
  );
};
