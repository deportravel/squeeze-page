import { Avatar, Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Section from "../../shared/Section";
import quoteAvatarImage from "./37551468_243058243186200_3316334310134382592_n.jpeg";

const NAME = "Antonio S.";
const QUOTE =
  "Hace falta una página para encontrar viajes deportivos en todo el mundo y generar una comunidad.";

export default function Quotes() {
  return (
    <Section fullHeight={false}>
      <Container
        maxWidth="sm"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 4, sm: 8 },
          pb: { xs: 6, sm: 12 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Avatar sx={{ width: "6rem", height: "6rem" }}>
            <Image
              src={quoteAvatarImage}
              alt="Avatar"
              layout="fill"
              objectFit="cover"
            />
          </Avatar>
          <Typography variant="h5" component="p">
            {NAME}
          </Typography>
          <Typography variant="body1">{QUOTE}</Typography>
        </Box>
      </Container>
    </Section>
  );
}
