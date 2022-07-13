import { Avatar, Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Section from "../../shared/Section";
import avatarImageGerardIzquierdo from "./avatar_gerard_izquierdo.png";
import avatarImageRogerFornas from "./avatar_roger_fornas.png";
import avatarImageAnnettKowalski from "./avatar_annett_kowalski.png";

const QUOTES = [
  {
    name: "Annett Kowalski",
    image: avatarImageAnnettKowalski,
    content:
      "Soy una apasionada del deporte en general, y siempre me gusta descubrir deportes nuevos que nunca he hecho antes. Si a eso le sumo el viajar, la combinación es perfecta.",
  },
  {
    name: "Gerard Izquierdo",
    image: avatarImageGerardIzquierdo,
    content:
      "Soy un fanático de los deportes acuáticos (waterpolo, natación, vela, windsurf…) y me encanta viajar. Llevaba mucho tiempo esperando algo como depor.travel. ¡No puedo esperar a vuestro lanzamiento oficial!",
  },
  {
    name: "Roger Fornàs",
    image: avatarImageRogerFornas,
    content:
      "He visitado varios países para hacer rutas de montaña, ya sea andando, ascendiendo a picos, corriendo o con bici de montaña. Tardaba semanas hasta encontrar opciones interesantes. ¿Dónde estaba depor.travel hasta ahora?",
  },
];

const ColorMask = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(135deg,rgba(255, 255, 255,0.6) 0%, rgba(255,255,255,.9) 100%)",
      backgroundPosition: "0 0, 50% 50%",
      backgroundSize: "auto,cover",
      zIndex: 1,
    }}
  />
);

export default function Quotes() {
  return (
    <Section backgroundColor={"transparent"}>
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          pt: { xs: 4, sm: 8 },
          pb: { xs: 6, sm: 12 },
          gap: { xs: 6, sm: 8 },
          zIndex: 2,
        }}
      >
        {QUOTES.map(({ name, content, image }) => (
          <Box
            key={name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar sx={{ width: "8rem", height: "8rem" }}>
              <Image src={image} alt="Avatar" layout="fill" objectFit="cover" />
            </Avatar>
            <Typography
              variant="subtitle1"
              component="p"
              gutterBottom
              textAlign="center"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
            >{`"${content}"`}</Typography>
          </Box>
        ))}
      </Container>

      <ColorMask />
    </Section>
  );
}
