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
}
    
export type SecondaryModelSupport = {
    type: DbModels,
    support: SupportType,
    comment?: string
}

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
    name: string,
    secondaryModels?: SecondaryModelSupport[]
    description?: string 
}

export type Extension = Engine & {
   
}

export type Database = Engine & {
    primaryModel: DbModels,
    consistencyModels: ConsistencyModels[],
    licenses: Licenses[],
    hostingOptions: HostingOptions[],
}

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
    OneTen = '1-10'
}

export enum HostingOptions {
    OnPrem = 'On-Prem',
    AWS = 'AWS',
    Azure = 'Azure',
    GCP = 'GCP',
    Other = 'Other',
}

export enum PricingModels {
    Any = 'Any'
}

export const AllHostingOptions = [
    HostingOptions.OnPrem,
    HostingOptions.AWS,
    HostingOptions.Azure,
    HostingOptions.GCP,
    HostingOptions.Other,
];

export enum ConsistencyModels {
    ImmediateConsistency = 'Immediate Consistency',
    EventualConsistency = 'Eventual Consistency',
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

export enum FeatureType {
    Transactions = 'Transactions',
}

type IFeature = {
    get name(): string;
}