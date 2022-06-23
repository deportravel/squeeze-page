import { Avatar, Box, Container, Typography } from "@mui/material";
import Section from "../shared/Section";

const NAME = "Juan G.";
const QUOTE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ipsum vitae volutpat aliquam. Nunc feugiat gravida sapien, sed posuere est suscipit aliquet. Sed lobortis, sem nec lobortis pulvinar, magna risus gravida turpis, mattis luctus diam tellus ut erat. Morbi rutrum nibh ut ullamcorper convallis.";

export default function Quotes() {
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
          <Avatar>JH</Avatar>
          <Typography variant="body1">{NAME}</Typography>
          <Typography variant="body2">{QUOTE}</Typography>
        </Box>
      </Container>
    </Section>
  );
}
