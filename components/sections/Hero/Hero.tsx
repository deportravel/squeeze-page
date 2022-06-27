import { Box, Container, Typography } from "@mui/material";
import Section from "../../shared/Section";
import SubscribeForm from "../../shared/SubscribeForm";

const TITLE = "Viajar y hacer deporte.";
const SUBTITLE = "Tus dos pasiones en una sola web.";
const DESCRIPTION =
  "En depor.travel encontrarás multitud de viajes de carácter 100% deportivo. Si buscas practicar tus deportes favoritos en lugares nuevos, estás de enhorabuena.";
const DESCRIPTION_2 = "Apúntate y te avisaremos el día del lanzamiento!";

export default function Hero() {
  return (
    <Section fullHeight>
      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="h1" gutterBottom fontSize={50}>
            depor
            <Typography
              component="span"
              color="primary.main"
              variant="h1"
              fontSize={70}
            >
              {`.`}
            </Typography>
            travel
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {TITLE}
          </Typography>
          <Typography variant="h3" role="doc-subtitle" gutterBottom>
            {SUBTITLE}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" gutterBottom width="100%">
            {DESCRIPTION}
          </Typography>
          <Typography variant="body1" gutterBottom width="100%">
            {DESCRIPTION_2}
          </Typography>
        </Box>

        <SubscribeForm />
      </Container>
    </Section>
  );
}
