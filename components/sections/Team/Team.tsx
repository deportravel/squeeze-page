import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Section from "../../shared/Section";
import teamMemberImage from "./37551468_243058243186200_3316334310134382592_n.jpeg";

const TEAM_HEADLINE = "¿Quiénes somos?";

const teamMembers = [
  {
    name: "Antonio Sanchis",
    role: "Product & Marketing",
  },
  {
    name: "Ali DeCastro",
    role: "Design",
  },
  {
    name: "Guillermo de la Puente",
    role: "Technology",
  },
];

export default function Team() {
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
          <Typography variant="h5" component="p">
            {TEAM_HEADLINE}
          </Typography>

          <List>
            {teamMembers.map((teamMember) => (
              <ListItem key={teamMember.name}>
                <ListItemAvatar>
                  <Avatar>
                    <Image
                      src={teamMemberImage}
                      alt="Avatar"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Avatar>
                </ListItemAvatar>
                <Box>
                  <ListItemText
                    primary={teamMember.name}
                    secondary={teamMember.role}
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Section>
  );
}
