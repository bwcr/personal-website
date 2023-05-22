import {
  ChakraProvider,
  cookieStorageManager,
  extendTheme,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import "../styles/scss/index.scss";
import "../styles/fonts/remixicon.css";
import { theme } from "../themes";
import { SkipNavLink } from "@chakra-ui/skip-nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    </Chakra>
  );
}

export default MyApp;
