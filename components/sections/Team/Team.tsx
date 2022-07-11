import {
  Avatar,
  Box,
  Container,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Section from "../../shared/Section";
import antonioTeamMemberImage from "./antonio.jpeg";
import allieTeamMemberImage from "./allie.jpeg";
import guillermoTeamMemberImage from "./guillermo.jpg";
import LinkedInLogo from "./LinkedInLogo";

const TEAM_HEADLINE = "¿Quiénes somos?";

const teamMembers = [
  {
    name: "Antonio Sanchis",
    role: "Product & Marketing",
    image: antonioTeamMemberImage,
    linkedInProfileUrl: "https://www.linkedin.com/in/antoniogonzalezsanchis/",
  },
  {
    name: "Allie DeCastro",
    role: "Design",
    image: allieTeamMemberImage,
    linkedInProfileUrl: "https://www.linkedin.com/in/allie-decastro-b26a9452/",
  },
  {
    name: "Guillermo de la Puente",
    role: "Technology",
    image: guillermoTeamMemberImage,
    linkedInProfileUrl: "https://www.linkedin.com/in/guillermodlpa/",
  },
];

export default function Team() {
  return (
    <Section>
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 4, sm: 8 },
          pb: { xs: 6, sm: 12 },
          px: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            width: "100%",
          }}
        >
          <Typography variant="h5" component="p">
            {TEAM_HEADLINE}
          </Typography>

          <List
            sx={{
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 1fr 1fr"],
              gridTemplateRows: ["1fr 1fr 1fr", "1fr"],
            }}
          >
            {teamMembers.map((teamMember) => (
              <ListItem
                key={teamMember.name}
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ width: 96, height: 96 }}>
                    <Image
                      src={teamMember.image}
                      alt={`Avatar of ${teamMember.name}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Avatar>
                </ListItemAvatar>

                <Box
                  mr={{
                    xs: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <ListItemText
                    sx={{ whiteSpace: "nowrap" }}
                    primary={teamMember.name}
                    secondary={teamMember.role}
                  />
                  <Link
                    href={teamMember.linkedInProfileUrl}
                    color="secondary"
                    sx={{
                      flexShrink: 0,
                      marginTop: 1,
                      transition: "opacity 0.25s ease",
                      opacity: 1,
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <LinkedInLogo />
                  </Link>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Section>
  );
}
