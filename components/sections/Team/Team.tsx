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
    name: "Ali DeCastro",
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
          px: 0,
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
              <ListItem
                key={teamMember.name}
                secondaryAction={
                  <Link
                    href={teamMember.linkedInProfileUrl}
                    color="secondary"
                    sx={{
                      transition: "opacity 0.25s ease",
                      opacity: 1,
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <LinkedInLogo />
                  </Link>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <Image
                      src={teamMember.image}
                      alt="Avatar"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Avatar>
                </ListItemAvatar>
                <Box mr={{ xs: 1, sm: 2 }}>
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
