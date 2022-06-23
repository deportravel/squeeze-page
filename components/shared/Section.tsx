import { Container } from "@mui/material";
import { ElementType, ReactNode } from "react";

export default function Section({
  fullHeight,
  component = "div",
  backgroundColor = "background.default",
  children,
}: {
  fullHeight: boolean;
  component?: ElementType;
  children: ReactNode;
  backgroundColor?: string;
}) {
  return (
    <Container
      sx={{
        position: "relative",
        py: 6,
        px: 3,
        m: 0,
        minHeight: fullHeight ? "100vh" : undefined,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
      maxWidth={false}
      component={component}
    >
      {children}
    </Container>
  );
}
