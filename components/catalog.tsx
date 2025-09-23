"use client";

import { FeedstockCard } from "@/components/feedstock-card";
import { TagFilter } from "@/components/tag-filter";
import { Dataset } from "@/types/types";
import { Suspense, useMemo, useState } from "react";
import { Box, Text, Container, Grid } from "theme-ui";
import { SearchBox } from "@/components/search-box";

const FeedstockList = ({
  feedstocks,
  search,
  tags,
  catalog,
}: {
  feedstocks: Dataset[];
  search: string;
  tags: string[];
  catalog?: string;
}) => {
  const filteredFeedstocks = useMemo(() => {
    if (!feedstocks || feedstocks.length === 0) {
      return [];
    }

    let result = feedstocks;

    if (search) {
      const re = new RegExp(search, "i");

      result = result.filter(
        (d: Dataset) =>
          d.title.match(re) ||
          d.tags?.some((tag) => tag.match(re)) ||
          d.description.match(re)
      );
    }

    if (tags.length > 0) {
      result = result.filter((d: Dataset) =>
        tags.find((tag) => d.tags?.includes(tag))
      );
    }

    return result;
  }, [feedstocks, search, tags]);

  if (!feedstocks || feedstocks.length === 0) {
    return <Box />;
  }

  if (filteredFeedstocks.length === 0) {
    return <Box>No feedstocks found matching your search criteria.</Box>;
  }

  return (
    <Grid gap={3} columns={[1, 2, 3]}>
      {filteredFeedstocks.map((feedstock) => (
        <FeedstockCard
          key={feedstock.title}
          feedstock={feedstock}
          catalog={catalog}
        />
      ))}
    </Grid>
  );
};

type CatalogProps = {
  feedstocks: Dataset[];
  error?: Error;
  catalog?: string;
};

export const Catalog = ({ feedstocks, error, catalog }: CatalogProps) => {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = useMemo(() => {
    const allTags = feedstocks.reduce((accum, f) => {
      f.tags?.forEach((tag) => accum.add(tag));
      return accum;
    }, new Set<string>());

    return Array.from(allTags);
  }, [feedstocks]);

  if (error) {
    return (
      <div style={{ color: "red", fontWeight: "bold" }}>
        🚨 Error loading feedstocks from catalog - {error.message}
      </div>
    );
  }
  return (
    <Box>
      <Container>
        <SearchBox search={search} setSearch={setSearch} />

        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />

        <Box as="section" sx={{ pt: 4, pb: 10 }}>
          <Text
            sx={{
              color: "primary",
              fontSize: [4, 4, 4, 6],
              fontFamily: "heading",
              width: "100%",
            }}
          ></Text>

          <Box mt={3}>
            <Suspense fallback={<Box />}>
              <FeedstockList
                tags={selectedTags}
                feedstocks={feedstocks}
                search={search}
                catalog={catalog}
              />
            </Suspense>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
