import { AnyAction } from 'redux';
import {
  FeaturesAction,
  FeaturesActionTypes,
  FeaturesState,
} from '@/redux/types/features';

const initialState: FeaturesState = {
  transactions: '',
  // partitioningModel: '',
  // replicationModel: '',
  primaryIndexes: false,
  secondaryIndexes: false,
  ttl: false,
  crossDc: false,
  cdcStreaming: false,
  mapReduce: false,
  fullTextSearch: false,
  bulkOperations: false,
  serverSideScripting: false,
  embeddable: false,
  automaticFailover: false,
};

export const featuresReducer = (
  state: FeaturesState = initialState,
  action: FeaturesAction | AnyAction
): FeaturesState => {
  switch (action.type) {
    case FeaturesActionTypes.SET_FEATURES:
      return {
        ...state,
        transactions: action.payload.transactions,
        // partitioningModel: action.payload.partitioningModel,
        // replicationModel: action.payload.replicationModel,
        primaryIndexes: action.payload.primaryIndexes,
        secondaryIndexes: action.payload.secondaryIndexes,
        crossDc: action.payload.crossDc,
        ttl: action.payload.ttl,
        cdcStreaming: action.payload.cdcStreaming,
        mapReduce: action.payload.mapReduce,
        fullTextSearch: action.payload.fullTextSearch,
        bulkOperations: action.payload.bulkOperations,
        serverSideScripting: action.payload.serverSideScripting,
        embeddable: action.payload.embeddable,
        automaticFailover: action.payload.automaticFailover,
      };
    default:
      return state;
  }
};
