export type SubnetResponse = {
  id: string;
  createdDate: string;
  updatedDate: string;
  registryVersion: number;
  recordVersion: number;
  startIndex: string;
  endIndex: string;
  subnetType: string;
  name: string;
  displayName: string;
  nodeCount: number;
  canisterIndex: number;
  canisterCount: number;
  nodes: CommonNodeResponse[];
};

export type CommonNodeResponse = {
  id: string;
  principal: {
    name: string;
  };
  operator: {
    id: string;
    name: string;
    operatorAllowance: number | null;
  };
  provider: {
    id: string;
    name: string;
  };
  subnet: {
    id: string;
    subnetType: string;
    displayName: string;
  };
};

export type NodeResponse = CommonNodeResponse & {
  createdDate: string;
};

export type NetworkResponse = {
  subnets: [id: string, name: string][];
  nodes: [
    id: string,
    subnetIdx: number,
    operatorIdx: number,
    providerIdx: number,
    name: string
  ][];
  principals: [id: string, name: string][];
};

export type TransactionType = "TRANSACTION" | "FEE" | "MINT" | "BURN";

export type PagedResponse<T> = {
  count: number;
  rows: T[];
};

export type PrincipalsResponse = PagedResponse<APIPrincipal>;

export type APIPrincipal = {
  id: string;
  name: string;
  updatedDate: string;
  canisterCount: number;
  accountCount: number;
  accounts?: {
    id: string;
    balance: string;
  }[];
  operatorOf: CommonNodeResponse[];
  providerOf: CommonNodeResponse[];
  nodeCount?: number;
};

export type TransactionsResponse = PagedResponse<Transaction>;

export type Transaction = {
  id: string;
  blockHeight: number;
  createdDate: string;
  senderId: string;
  sender: {
    name: string;
  } | null;
  receiverId: string;
  receiver: {
    name: string;
  } | null;
  type: TransactionType;
  amount: string;
  fee: string;
  memo: string;
};

export type AccountsResponse = PagedResponse<Account>;

export type Account = {
  id: string;
  name: string;
  principal: string;
  balance: string;
  first: string;
  sent: number;
  received: number;
};

export type CanistersResponse = PagedResponse<Canister>;

export type Canister = {
  id: string;
  principal?: {
    name: string;
  } | null;
  createdDate: string;
  latestVersionDate: string;
  status: "Running" | "Stopping" | "Stopped";
  controller: {
    name: string;
  } | null;
  controllerId: string | null;
  subnet: {
    subnetType: string;
    displayName: string;
  };
  subnetId: string;
  hasCandid: boolean;
  moduleHash: string;
  moduleMatches: number;
  versions?: {
    createdDate: string;
    moduleHash: string;
  }[];
};

export type ModulesResponse = PagedResponse<Module>;

export type Module = {
  moduleHash: string;
  canisters: string;
  subnets: string;
};

export type StatsResponse = {
  canisters: number;
  controllers: number;
  subnets: number;
  accounts: number;
  txs: number;
  nodes: number;
  supply: string;
};

export type SparklineResponse = {
  currency: "ICP";
  timestamps: string[];
  prices: string[];
}[];
