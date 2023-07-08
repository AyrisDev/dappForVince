import "../styles/globals.css";
import type { AppProps } from "next/app";
import { defaultTheme, ChainProvider } from "@cosmos-kit/react";
import { ChakraProvider } from "@chakra-ui/react";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation";
import { wallets as leapWallets } from "@cosmos-kit/leap";
import { ThemeProvider } from "@cosmology-ui/react";
import { SignerOptions } from "@cosmos-kit/core";
import { chains, assets } from "chain-registry";

import {
  vincetestnet,
  vincetestnetAssets,
} from "../hooks/vincechaintestnet/chain";
import Layout from "../components/layout";

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const signerOptions: SignerOptions = {
    // signingStargate: (_chain: Chain) => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <ThemeProvider>
      <ChakraProvider theme={defaultTheme}>
        <ChainProvider
          chains={[...chains, vincetestnet]}
          assetLists={[...assets, vincetestnetAssets]}
          wallets={[...keplrWallets, ...cosmostationWallets, ...leapWallets]}
          walletConnectOptions={{
            signClient: {
              projectId: "a8510432ebb71e6948cfd6cde54b70f7",
              relayUrl: "wss://relay.walletconnect.org",
              metadata: {
                name: "CosmosKit Template",
                description: "CosmosKit dapp template",
                url: "https://docs.cosmoskit.com/",
                icons: [],
              },
            },
          }}
          wrappedWithChakra={true}
          signerOptions={signerOptions}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChainProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
