import { Avatar, Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Section from "../../shared/Section";
import avatarImageGerardIzquierdo from "./avatar_gerard_izquierdo.png";
import avatarImageRogerFornas from "./avatar_roger_fornas.png";

const QUOTES = [
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

export default function Quotes() {
  return (
    <Section backgroundColor={"background.shaded"}>
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
            <Typography variant="subtitle1" component="p" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body1">{`"${content}"`}</Typography>
          </Box>
        ))}
      </Container>
    </Section>
  );
}
