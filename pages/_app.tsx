import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import Layout from "../components/layout";
import { dark } from "@clerk/themes";
import { theme } from "../theme";
import "../styles.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
        {...pageProps}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </ChakraProvider>
  );
}

export default MyApp;
