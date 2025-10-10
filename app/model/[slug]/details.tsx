"use client";

import { License } from "@/components/feedstock/license";
import { Repository } from "@/components/feedstock/repository";
import { Maintainers } from "@/components/feedstock/maintainers";
import { Model } from "@/types/types";
import { Box, Grid, Text } from "theme-ui";

export const ModelDetails: React.FC<{ model: Model }> = ({ model }) => {
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

      <Grid
        columns={[1, 2, 4, 4]} // responsive: 1 col on mobile, 2 cols on tablet, 4 cols on large screens
        gap={3} // spacing between grid items
        sx={{ my: 3 }}
      >
        <Box>
          <Repository metaURL={model.repository} />
        </Box>

        <Box>
          <License
            license={model.license?.name}
            license_link={model.license?.url}
          />
        </Box>

        <Box>
          <Maintainers maintainers={model.maintainers} />
        </Box>
      </Grid>
    </>
  );
};
