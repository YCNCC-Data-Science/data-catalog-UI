import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { Box, Container, IconButton } from "theme-ui";

export const Footer = () => {
  return (
    <Container
      as="footer"
      sx={{
        bg: "hinted",
        py: 2,
        mt: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          mt: 3,
          mb: 3,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IconButton
          as="a"
          // @ts-ignore
          href="https://www.linkedin.com/company/ycncc"
          sx={{ mx: 2 }}
        >
          <FaLinkedin size={24} />
        </IconButton>

        <IconButton
          as="a"
          // @ts-ignore
          href="https://github.com/YCNCC-Data-Science"
          sx={{ mx: 2 }}
        >
          <FaGithub size={24} />
        </IconButton>

        <IconButton
          as="a"
          // @ts-ignore
          href="https://naturalcarboncapture.yale.edu/"
          sx={{ mx: 2 }}
        >
          <FaGlobe size={24} />
        </IconButton>
      </Box>
    </Container>
  );
};
