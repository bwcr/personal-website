import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import "../styles/scss/index.scss";
import "../styles/fonts/remixicon.css";
import { theme } from "../themes";
import { SkipNavLink } from "@chakra-ui/skip-nav";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

export function Chakra({ cookies, children }) {
  // b) Pass `colorModeManager` prop
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Component {...pageProps} />
      <Analytics />
    </Chakra>
  );
}

export default MyApp;
