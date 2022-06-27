import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <Typography variant="h1" gutterBottom fontSize={{ xs: 45, sm: 60 }}>
      depor
      <Typography
        component="span"
        color="primary.main"
        variant="h1"
        fontSize={{ xs: 75, sm: 90 }}
      >
        {`.`}
      </Typography>
      travel
    </Typography>
  );
}
