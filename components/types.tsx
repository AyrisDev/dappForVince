import { MouseEventHandler, ReactNode, RefObject } from "react";
import { IconType } from "react-icons";
import { QueryPoolResponse } from "interchain/types/codegen/cosmos/staking/v1beta1/query";
export interface DataType extends OptionBase {
  isDisabled?: boolean;
  label: string;
  value: string;
  icon?: string;
  chainId: string;
  chainRoute?: string;
}

export interface ChooseChainInfo {
  chainName: string;
  chainRoute?: string;
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
}

export type ChainInfo = {
  annualProvisions?: string;
  pool?: QueryPoolResponse["pool"];
  communityTax?: string;
};

export type PriceHash = {
  [key: string]: number;
};

export enum WalletStatus {
  NotInit = "NotInit",
  Loading = "Loading",
  Loaded = "Loaded",
  NotExist = "NotExist",
  Rejected = "Rejected",
}

export interface ConnectWalletType {
  buttonText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: IconType;
  onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>;
}

export interface ConnectedUserCardType {
  username?: string;
  icon?: ReactNode;
  walletIcon?: string;
}

export interface OptionBase {
  variant?: string;
  colorScheme?: string;
  isFixed?: boolean;
  isDisabled?: boolean;
}

export interface ChainOption extends OptionBase {
  isDisabled?: boolean;
  label: string;
  value: string;
  icon?: string;
  chainName: string;
  chainRoute?: string;
}

export type handleSelectChainDropdown = (value: ChainOption | null) => void;

export interface ChangeChainDropdownType {
  data: ChainOption[];
  selectedItem?: ChainOption;
  onChange: handleSelectChainDropdown;
  chainDropdownLoading?: boolean;
}

export interface ChangeChainMenuType {
  data: ChainOption[];
  value?: ChainOption;
  onClose?: () => void;
  onChange: handleSelectChainDropdown;
  innerRef?: RefObject<HTMLInputElement>;
}

export interface ChainCardProps {
  prettyName: string;
  icon?: string;
}

export interface FeatureProps {
  title: string;
  text: string;
  href: string;
}

export type CopyAddressType = {
  address?: string;
  walletIcon?: string;
  isLoading?: boolean;
  maxDisplayLength?: number;
  isRound?: boolean;
  size?: string;
};

export enum VoteOption {
  YES = "YES",
  NO = "NO",
  NWV = "NWV",
  ABSTAIN = "ABSTAIN",
}

export enum TransactionResult {
  Success = 0,
  Failed = 1,
}

export interface MyValidator {
  details: string | undefined;
  name: string | undefined;
  address: string;
  staked: number;
  reward: number;
  identity: string | undefined;
  commission: string | undefined;
}

export type ImageSource = {
  imageSource: "cosmostation" | "keybase";
};

export type PrettyAsset = {
  logoUrl: string | undefined;
  symbol: string;
  prettyChainName: string;
  displayAmount: string;
  dollarValue: string;
  amount: string;
  denom: string;
};

export const Transfer = {
  Deposit: "Deposit",
  Withdraw: "Withdraw",
} as const;

export type TransferInfo = {
  type: TransferValues;
  sourceChainName: string;
  destChainName: string;
  token: PrettyAsset;
};

export type Token = {
  price: number;
  denom: string;
  symbol: string;
  liquidity: number;
  volume_24h: number;
  volume_24h_change: number;
  name: string;
  price_24h_change: number;
  price_7d_change: number;
  exponent: number;
  display: string;
};

export type TransferValues = (typeof Transfer)[keyof typeof Transfer];

export type AssetOption = {
  value: string;
  icon: { png: string | undefined };
};

export type PrettyAssetOption = PrettyAsset & AssetOption;
