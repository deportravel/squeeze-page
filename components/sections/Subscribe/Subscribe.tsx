import { Box, Container, Typography } from "@mui/material";
import Section from "../../shared/Section";
import SubscribeForm from "../../shared/SubscribeForm";

const HEADLINE = "Apúntate";
const TEXT = "Te avisaremos el día del lanzamiento";

export default function Subscribe() {
  return (
    <Section fullHeight={false} backgroundColor="transparent">
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 12,
          zIndex: 2,
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
          <Typography variant="h2" color="text.contrast">
            {HEADLINE}
          </Typography>
          <Typography variant="body1" color="text.contrast">
            {TEXT}
          </Typography>

          <SubscribeForm />
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg,rgba(30,33,33,.70) 0%, rgba(32,32,32,.3) 100%)",
          backgroundPosition: "0 0, 50% 50%",
          backgroundSize: "auto,cover",
          zIndex: 1,
        }}
      />
    </Section>
  );
}
