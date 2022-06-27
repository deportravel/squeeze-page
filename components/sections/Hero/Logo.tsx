import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <Typography
      variant="h1"
      gutterBottom
      fontSize={{ xs: 45, sm: 60 }}
      fontWeight="bold"
    >
      depor
      <Typography
        component="span"
        color="primary.main"
        variant="h1"
        fontWeight="bold"
        fontSize={{ xs: 70, sm: 80 }}
      >
        {`.`}
      </Typography>
      travel
    </Typography>
  );
}
