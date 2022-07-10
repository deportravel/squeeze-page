import { Alert, AlertTitle, Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import getConfig from "next/config";
import { FormEvent, useRef, useState } from "react";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";

const { publicRuntimeConfig } = getConfig();

const BUTTON_LABEL = "Avísame";

enum SubmitStatus {
  IDDLE,
  SUBMITTING,
  SUBMITTED,
  ERROR,
}

export default function SubscribeForm() {
  const [status, setStatus] = useState(SubmitStatus.IDDLE);
  const [email, setEmail] = useState("");
  const form = useRef();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setStatus(SubmitStatus.SUBMITTING);
    const data = new FormData(form.current);
    const action = (event.target as HTMLFormElement).action;
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        setStatus(SubmitStatus.SUBMITTED);
      })
      .catch((error) => {
        console.error(error);
        setStatus(SubmitStatus.ERROR);
      });
  };

  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", gap: 2, alignItems: "stretch", flexWrap: 1 }}
        method="POST"
        action={publicRuntimeConfig.FORM_POST_ACTION}
        onSubmit={handleSubmit}
        ref={form}
      >
        {status !== SubmitStatus.SUBMITTED ? (
          <>
            <TextField
              type="email"
              label="Email"
              name="Email"
              required
              sx={{ backgroundColor: "background.default", borderRadius: 1 }}
              InputLabelProps={{
                color: "secondary",
              }}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loading={status === SubmitStatus.SUBMITTING}
              sx={{ flexShrink: 0 }}
            >
              {BUTTON_LABEL}
            </LoadingButton>
          </>
        ) : (
          <Alert
            severity="success"
            variant="filled"
            icon={<CelebrationRoundedIcon fontSize="inherit" />}
            sx={{ flexGrow: 1 }}
          >
            <AlertTitle>Guardado. ¡Gracias!</AlertTitle>
            {`Avisaremos a ${email} cuando llegue el momento`}
          </Alert>
        )}
      </Box>
      {status === SubmitStatus.ERROR && (
        <Alert severity="error" variant="filled">
          An error ocurred
        </Alert>
      )}
    </>
  );
}
