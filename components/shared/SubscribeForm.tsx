import { Box, Button, TextField } from "@mui/material";

const BUTTON_LABEL = "Avísame";

export default function SubscribeForm() {
  return (
    <Box component="form" sx={{ display: "flex", gap: 3 }}>
      <TextField
        type="email"
        label="Email"
        required
        sx={{ backgroundColor: "background.default", borderRadius: 1 }}
      />
      <Button type="submit" variant="contained" size="large">
        {BUTTON_LABEL}
      </Button>
    </Box>
  );
}
