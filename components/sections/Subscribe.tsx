import { Box, Container, Typography } from "@mui/material";
import Section from "../shared/Section";
import SubscribeForm from "../shared/SubscribeForm";

const HEADLINE = "Apúntate";
const TEXT = "Te avisaremos el día del lanzamiento";

export default function Subscribe() {
  return (
    <Section fullHeight={false}>
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 12,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="h2">{HEADLINE}</Typography>
          <Typography variant="body1">{TEXT}</Typography>

          <SubscribeForm />
        </Box>
      </Container>
    </Section>
  );
}
