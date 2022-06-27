import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";

import Hero from "../components/sections/Hero";
import Quotes from "../components/sections/Quotes";
import Subscribe from "../components/sections/Subscribe";
import AppFooter from "../components/sections/AppFooter";
import AppThemeProvider from "../components/theme/AppThemeProvider";
import FixedBackgroundImage from "../components/shared/FixedBackgroundImage";
import { Divider } from "@mui/material";

const TITLE = "depor.travel - Viajar y hacer deporte";
const DESCRIPTION =
  "Multitud de viajes de carácter 100% deportivo. Si buscas practicar tus deportes favoritos en lugares nuevos, estás de enhorabuena.";

function SqueezePage() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://depor.travel" />
      </Head>
      <CssBaseline />
      <AppThemeProvider>
        <Hero />

        <Divider sx={{ zIndex: 2 }} />

        <Quotes />
        <Subscribe />
        <AppFooter />

        <FixedBackgroundImage />
      </AppThemeProvider>
    </>
  );
}

export default SqueezePage;
