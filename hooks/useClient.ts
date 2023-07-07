import { osmosis } from "osmojs";
import { useChain } from "@cosmos-kit/react";

export const useClient = (chainName: string) => {
  const { getRpcEndpoint } = "http://154.53.47.14:26657/";

  const getClient = async () => {
    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log("no rpc endpoint — using a fallback");
      rpcEndpoint = `http://154.53.47.14:26657`;
    }

    const client = await osmosis.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    return client;
  };

  return { getClient };
};
