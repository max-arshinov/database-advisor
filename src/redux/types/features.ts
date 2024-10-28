export enum FeaturesActionTypes {
  SET_FEATURES = 'SET_FEATURES',
}

export interface FeaturesState {
  transactions: string;
  // partitioningModel: string;
  // replicationModel: string;
  primaryIndexes: boolean;
  secondaryIndexes: boolean;
  ttl: boolean;
  crossDc: boolean;
  cdcStreaming: boolean;
  mapReduce: boolean;
  fullTextSearch: boolean;
  bulkOperations: boolean;
  serverSideScripting: boolean;
  embeddable: boolean;
  automaticFailover: boolean;
}

export interface SetFeaturesAction {
  type: FeaturesActionTypes.SET_FEATURES;
  payload: FeaturesState;
}

export type FeaturesAction = SetFeaturesAction;
