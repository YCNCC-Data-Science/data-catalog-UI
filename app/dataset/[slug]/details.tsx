"use client";

import { License } from "@/components/feedstock/license";
import { Repository } from "@/components/feedstock/repository";
import { AccessLink } from "@/components/feedstock/access-link";
import { Maintainers } from "@/components/feedstock/maintainers";
import { Feedstock } from "@/types/types";
import { Box, Grid, Text } from "theme-ui";

//  Maintainers,
//  Providers,

export const DatasetDetails: React.FC<{ feedstock: Feedstock }> = ({
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

      <Grid
        columns={[1, 2, 4, 4]} // responsive: 1 col on mobile, 2 cols on tablet, 4 cols on large screens
        gap={3} // spacing between grid items
        sx={{ my: 3 }}
      >
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

/*

      <Box>
        <Maintainers maintainers={feedstock.maintainers} />
      </Box>
      
<Box>
        <Repository metaURL={feedstock['ncviewjs:meta_yaml_url']} />
      </Box>

      <Box>
        <Providers providers={feedstock.provenance?.providers} />
      </Box>
      */
