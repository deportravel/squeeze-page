import { Box, Button, TextField } from "@mui/material";

const BUTTON_LABEL = "Avísame";

export default function SubscribeForm() {
  return (
    <Box component="form" sx={{ display: "flex", gap: 2 }}>
      <TextField
        type="email"
        label="Email"
        required
        sx={{ backgroundColor: "background.default", borderRadius: 1 }}
        InputLabelProps={{
          color: "secondary",
        }}
      />
      <Button type="submit" variant="contained" size="large">
        {BUTTON_LABEL}
      </Button>
    </Box>
  );
}
