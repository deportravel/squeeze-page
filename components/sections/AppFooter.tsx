import { Typography } from "@mui/material";
import Section from "../shared/Section";
import StyledAppName from "../shared/StyledAppName";

export default function AppFooter() {
  return (
    <Section fullHeight={false} component="footer">
      <Typography variant="body2">
        © 2022 <StyledAppName />
      </Typography>
    </Section>
  );
}
