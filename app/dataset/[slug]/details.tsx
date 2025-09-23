"use client";

import { License } from "@/components/feedstock/license";
import { AccessLink } from "@/components/feedstock/access-link";
import { Maintainers } from "@/components/feedstock/maintainers";
import { Dataset } from "@/types/types";
import { Box, Grid, Text } from "theme-ui";

export const DatasetDetails: React.FC<{ feedstock: Dataset }> = ({
  feedstock,
}) => {
  return (
    <>
      <Text
        as="p"
        sx={{
          mb: 3,
          color: "muted",
          fontSize: [3, 4],
          fontFamily: "mono",
          letterSpacing: "mono",
          textTransform: "uppercase",
        }}
      >
        Open Access
      </Text>

      <Grid columns={[1, 2, 4, 4]} gap={3} sx={{ my: 3 }}>
        <Box>
          <AccessLink
            doi={feedstock.data_access.doi}
            url={feedstock.data_access.url}
          />
        </Box>

        <Box>
          <License
            license={feedstock.license?.name}
            license_link={feedstock.license?.url}
          />
        </Box>

        <Box>
          <Maintainers maintainers={feedstock.maintainers} />
        </Box>
      </Grid>
    </>
  );
};
