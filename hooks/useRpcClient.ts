import { osmosis } from "osmojs";
import { useChain } from "@cosmos-kit/react";

export const useRpcClient = (chainName: string) => {
  const { getRpcEndpoint } = useChain(chainName);

  const getRpcClient = async () => {
    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log("no rpc endpoint — using a fallback");
      rpcEndpoint = `http://154.53.47.14:26657`;
    }

    return await osmosis.ClientFactory.createRPCQueryClient({ rpcEndpoint });
  };

  return { getRpcClient };
};
