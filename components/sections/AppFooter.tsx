import { Typography } from "@mui/material";
import Section from "../shared/Section";

const COPYRIGHT_NOTE = "© 2022 depor.travel";

export default function AppFooter() {
  return (
    <Section fullHeight={false} component="footer">
      <Typography variant="body2">{COPYRIGHT_NOTE}</Typography>
    </Section>
  );
}
