"use client";

import { Model } from "@/types/types";
import { Box, Text, Link } from "theme-ui";

function formatAuthors(authors: string[]) {
  if (authors.length === 0) return "";

  const formatted = authors.map((fullName) => {
    const parts = fullName.trim().split(" ");
    const lastName = parts.pop();
    const initials = parts.map((n) => n[0].toUpperCase() + ".").join("");
    return `${lastName}, ${initials}`;
  });

  if (formatted.length === 1) return formatted[0];
  if (formatted.length === 2) return `${formatted[0]} & ${formatted[1]}`;
  return (
    formatted.slice(0, -1).join(", ") + ", & " + formatted[formatted.length - 1]
  );
}

export const Manuscripts: React.FC<{ model: Model }> = ({ model }) => {
  const manuscripts = model.publications;
  return (
    <Box sx={{ mt: 4 }}>
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
        Publications
      </Text>

      <Text
        as="p"
        sx={{
          mb: 4,
          color: "muted",
          fontSize: 1,
          fontFamily: "mono",
        }}
      >
        We kindly ask that you cite the following publications when using this
        dataset:
      </Text>

      <Box as="ol" sx={{ listStyle: "none", pl: 0, m: 0 }}>
        {manuscripts.map((m) => (
          <Box
            as="li"
            key={m.doi}
            sx={{
              mb: 3,
              maxWidth: ["100%", "85%", "70%"],
              pl: "2em",
              textIndent: "-2em",
              lineHeight: 1.6,
              textAlign: "justify",
            }}
          >
            <Text as="span" sx={{ fontSize: 2 }}>
              {formatAuthors(m.authors)} ({m.year}). {m.title}{" "}
              <em>{m.journal}</em>
              {m.volume ? `, ${m.volume}` : ""}
              {m.article ? `, ${m.article}` : ""}.
              {m.doi && (
                <>
                  {" "}
                  doi:{" "}
                  <Link
                    href={`https://doi.org/${m.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "primary",
                      fontWeight: "bold",
                      textDecoration: "none",
                      ":hover": { textDecoration: "underline" },
                    }}
                  >
                    {m.doi}
                  </Link>
                </>
              )}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
