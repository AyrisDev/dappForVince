import { useManager } from "@cosmos-kit/react";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import {
  ChainOption,
  ChooseChain,
  handleSelectChainDropdown,
  ConnectWalletButton,
} from ".";
import { WalletCardSection } from "./card";
import { ChainName } from "@cosmos-kit/core";
import React from "react";

export const WalletSection = ({
  chainName,
}: {
  chainName: ChainName | undefined;
}) => {
  const { chainRecords, getChainLogo } = useManager();

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

  return (
    <Center py={16}>
      <Grid
        w="full"
        maxW="sm"
        templateColumns="1fr"
        rowGap={4}
        alignItems="center"
        justifyContent="center">
        {chainName ? (
          <WalletCardSection chainName={chainName}></WalletCardSection>
        ) : (
          <ConnectWalletButton buttonText={"Connect Wallet"} isDisabled />
        )}
      </Grid>
    </Center>
  );
};
