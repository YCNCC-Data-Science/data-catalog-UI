"use client";

import { useCallback, useMemo, useState } from "react";
import { Box, Container, Flex, Button, Badge, IconButton } from "theme-ui";
import { LuFilter } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";

const TagBadge = ({
  label,
  onRemove,
}: {
  label: string;
  onRemove?: () => void;
}) => (
  <Badge
    sx={{
      display: "flex",
      alignItems: "center",
      px: 2,
      height: ["22px", "22px", "24px"],
      lineHeight: ["22px", "22px", "24px"],
      opacity: 0.8,
    }}
  >
    <Box
      as="span"
      sx={{
        fontFamily: "mono",
        letterSpacing: "mono",
        fontSize: [0, 1],
        textTransform: "uppercase",
      }}
    >
      {label}
    </Box>
    {onRemove && (
      <Button
        variant="transparent"
        onClick={onRemove}
        sx={{
          ml: 2,
          p: 0,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <RiCloseLargeFill />
      </Button>
    )}
  </Badge>
);

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: (updated: string[]) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  setSelectedTags,
}) => {
  tags = tags.sort();
  const [open, setOpen] = useState(false);
  const selectableTags = useMemo(
    () => tags.filter((tag) => !selectedTags.includes(tag)),
    [tags, selectedTags]
  );

  const removeTag = useCallback(
    (tag: string) => setSelectedTags(selectedTags.filter((t) => t !== tag)),
    [selectedTags, setSelectedTags]
  );

  const addTag = useCallback(
    (tag: string) => setSelectedTags([...selectedTags, tag]),
    [selectedTags, setSelectedTags]
  );

  return (
    <Container sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          mx: "auto",
          position: "relative",
          mt: 3,
          width: "50%",
          justifyContent: "center",
        }}
      >
        <Flex sx={{ gap: 2, flexWrap: "wrap", alignItems: "baseline" }}>
          <Button
            onClick={() => setOpen((o) => !o)}
            variant="outline"
            sx={{
              textTransform: "uppercase",
              fontFamily: "mono",
              letterSpacing: "mono",
              fontSize: [0, 0, 1],
              minHeight: [24, 24, 26],
              textAlign: "left",
              color: open ? "muted" : "muted",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Filter by tag
            <LuFilter />
          </Button>

          {selectedTags.map((tag, i) => (
            <Flex
              key={tag}
              sx={{ gap: 2, flexWrap: "nowrap", alignItems: "center" }}
            >
              <TagBadge label={tag} onRemove={() => removeTag(tag)} />
              {i === selectedTags.length - 1 && selectedTags.length > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setSelectedTags([])}
                  sx={{
                    fontFamily: "mono",
                    letterSpacing: "mono",
                    textTransform: "uppercase",
                    fontSize: 0,
                  }}
                >
                  Clear
                </Button>
              )}
            </Flex>
          ))}
        </Flex>

        {open && (
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              bg: "background",
              border: "1px solid",
              borderColor: "muted",
              mt: 1,
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 1,
              p: 2,
            }}
          >
            <Flex sx={{ justifyContent: "flex-end" }}>
              <IconButton
                onClick={() => setOpen(false)}
                aria-label="Close"
                sx={{ cursor: "pointer", m: 1 }}
              >
                <RiCloseLargeFill />
              </IconButton>
            </Flex>
            <Flex sx={{ flexWrap: "wrap", gap: 2 }}>
              {selectableTags.map((tag) => (
                <TagBadge key={tag} label={tag} onRemove={() => addTag(tag)} />
              ))}
            </Flex>
          </Box>
        )}
      </Box>
    </Container>
  );
};
