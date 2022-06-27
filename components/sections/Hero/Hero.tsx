import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Section from "../../shared/Section";
import SubscribeForm from "../../shared/SubscribeForm";
import Carousel from "./Carousel";
import Logo from "./Logo";

const TITLE = "Viajar y hacer deporte.";
const SUBTITLE = "Tus dos pasiones en una sola web.";
const DESCRIPTION =
  "En depor.travel encontrarás multitud de viajes de carácter 100% deportivo. Si buscas practicar tus deportes favoritos en lugares nuevos, estás de enhorabuena.";
const DESCRIPTION_2 = "Apúntate y te avisaremos el día del lanzamiento!";

export default function Hero() {
  const smallViewport = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Section fullHeight>
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 2, sm: 15 },
          }}
        >
          <Box
            sx={{
              width: { sm: "66%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box>
              <Logo />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h2">
                {TITLE}
                <br />
                {SUBTITLE}
              </Typography>
            </Box>

            {smallViewport && (
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "20rem",
                  flexShrink: 0,
                  alignSelf: "center",
                }}
              >
                <Carousel />
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" paragraph width="100%">
                {DESCRIPTION}
              </Typography>
              <Typography variant="body1" paragraph width="100%">
                {DESCRIPTION_2}
              </Typography>
            </Box>

            <SubscribeForm />
          </Box>

          {!smallViewport && (
            <Box
              sx={{
                width: "33%",
                flexShrink: 0,
              }}
            >
              <Carousel />
            </Box>
          )}
        </Box>
      </Container>
    </Section>
  );
}
