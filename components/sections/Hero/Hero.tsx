import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Section from "../../shared/Section";
import SubscribeForm from "../../shared/SubscribeForm";
import heroImage from "./62821f05bb31bdb20d0191c4_david-marcu-VfUN94cUy4o-unsplash.jpeg";

const COVER_BLOCK_ALT = "Ciclista y paisaje";
const TITLE = "Viajar y hacer deporte.";
const SUBTITLE = "Tus dos pasiones en una sola web.";
const DESCRIPTION =
  "En depor.travel encontrarás multitud de viajes de carácter 100% deportivo. Si buscas practicar tus deportes favoritos en lugares nuevos, estás de enhorabuena.";
const DESCRIPTION_2 = "Apúntate y te avisaremos el día del lanzamiento!";

export default function Hero() {
  return (
    <>
      <Section fullHeight backgroundColor="transparent">
        <Container
          maxWidth="sm"
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box>
            <Typography
              variant="h1"
              gutterBottom
              color="text.contrast"
              fontSize={50}
            >
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
            <Typography variant="h2" gutterBottom color="text.contrast">
              {TITLE}
            </Typography>
            <Typography
              variant="h3"
              role="doc-subtitle"
              gutterBottom
              color="text.contrast"
            >
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
            <Typography
              variant="body1"
              gutterBottom
              color="text.contrast"
              width="100%"
            >
              {DESCRIPTION}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              color="text.contrast"
              width="100%"
            >
              {DESCRIPTION_2}
            </Typography>
          </Box>

          <SubscribeForm />
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

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={COVER_BLOCK_ALT}
          priority
          placeholder="blur"
        />
      </Box>
    </>
  );
}
