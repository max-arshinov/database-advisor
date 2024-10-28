export enum SupportType {
  NotSupported = 'Not Supported',
  PartialSupport = 'Partial Support',
  Supported = 'Supported',
}

export enum DbModels {
  Relational = 'Relational',
  Columnar = 'Columnar',
  Document = 'Document',
  KeyValue = 'Key-Value',
  SearchEngine = 'Search Engine',
  Graph = 'Graph',
  WideColumn = 'Wide Column',
  TimeSeries = 'Time Series',
  Spatial = 'Spatial',
  Vector = 'Vector',
  MultiModel = 'Multi-Model',
}

export enum DataStructures {
  Structured = 'Structured',
  SemiStructuredDefinedSchema = 'Semi-Structured with Defined Schema',
  SemiStructuredFlexibleSchema = 'Semi-Structured Databases with Flexible Schema',
  Unstructured = 'Unstructured',
  Graph = 'Graph',
  Vector = 'Vector',
}

export enum SupportedDataTypes {
  Financial = 'Financial',
  JSON = 'JSON',
  XML = 'XML',
  IP = 'IP',
  Spatial = 'Spatial',
  TimeSeries = 'Time Series',
}

export type SecondaryModelSupport = {
  model: DbModels;
  support: SupportType;
  comment?: string;
};

export interface IExtension {
  get name(): string;
  get models(): SecondaryModelSupport[];
  get description(): string;
}

export interface IDatabase {
  get name(): string;
  get model(): DbModels;
  get description(): string;
  get isCommercial(): boolean;
  get secondaryModels(): SecondaryModelSupport[];
  get consistencyModels(): ConsistencyModels[];
}

type Engine = {
  name: string;
  secondaryModels?: SecondaryModelSupport[];
  description?: string;
};

export type Extension = Engine & {};

export type Database = Engine & {
  primaryModel: DbModels;
  consistencyModels: ConsistencyModels[];
  licenses: Licenses[];
  hostingOptions: HostingOptions[];
  throughput?: {};
};

export enum CA {
  Consistency = 'Consistency',
  Availability = 'Availability',
}

export enum CL {
  Consistency = 'Consistency',
  Latency = 'Latency',
}

export enum Licenses {
  Free = 'Free',
  Commercial = 'Commercial',
}

export enum OltpOlap {
  Oltp = 'OLTP',
  Olap = 'OLAP',
}

export enum RPS {
  LessThan1 = '<1',
  OneTen = '1-10',
}

export enum HostingOptions {
  OnPrem = 'On-Prem',
  AWS = 'AWS',
  Azure = 'Azure',
  GCP = 'GCP',
  Other = 'Other',
}

export enum PricingModels {
  Any = 'Any',
}

export const AllHostingOptions = [
  HostingOptions.OnPrem,
  HostingOptions.AWS,
  HostingOptions.Azure,
  HostingOptions.GCP,
  HostingOptions.Other,
];

export enum ConsistencyModels {
    Immediate = 'Immediate',
    Eventual = 'Eventual',
}

export enum QueryLanguages {
  SQL = 'SQL',
  PSQL = 'P-SQL',
  MySQL = 'MySQL',
  SQLike = 'SQLike',
  MongoDB = 'MongoDB',
  CQL = 'CQL',
  DynamoDB = 'DynamoDB',
  Gremlin = 'Gremlin',
}

export enum Latencies {
    SingleDigit = '<10ms',
    TwoDigit = '10ms-99ms',
    More = '>=100ms',
}

export enum Scalability {
    Vertical = 'Vertical',
    Horizontal = 'Horizontal',
    HorizontalLinear = 'Linear Horizontal'
}

export enum Availability {
    ThreeNines = '<=99.9%',
    FourNines = '99.99%',
    FiveNines = '>=99.999%'
}

export enum Maintainability {
    ManagedService = 'Managed Service',
    SafeDefaults = 'Safe Defaults',
    RequiresTuning = 'Requires Tuning'
}

export enum Interoperability {
    Kafka = 'Kafka',
    Kinesis = 'Kinesis',
    Debezium = 'Debezium',
}

export enum Transactions {
    AtomicOperations = 'Atomic Operations',
    MultiACID = 'Multi-Row/Document ACID',
    SingleACID = 'Single-Row/Document ACID',
    Paxos = 'PAXOS Light-Weight Transactions',
}

export enum Replications {
  LeaderFollowerSync = 'Leader/Follower aka Master/Slave Synchronous',
  LeaderFollowerAsync = 'Leader/Follower aka Master/Slave Asynchronous',
  MultiLeaderSync = 'Multi-Leader aka Multi-Master Synchronous',
  MultiLeaderAsync = 'Multi-Leader aka Multi-Master Asynchronous',
  Leaderless = 'Leaderless',
  ShardingWithReplication = 'Sharding with Replication',
  Consesnsus = 'Consesus',
}
