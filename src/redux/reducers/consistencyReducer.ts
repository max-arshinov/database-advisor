import { AnyAction } from 'redux';
import {
  ConsistencyAction,
  ConsistencyActionTypes,
  ConsistencyState,
} from '@/redux/types/consistency';

const initialState: ConsistencyState = {
  consistencyModel: '',
  consistencyLatency: '',
  consistencyAvailability: '',
};

export const consistencyReducer = (
  state: ConsistencyState = initialState,
  action: ConsistencyAction | AnyAction
): ConsistencyState => {
  switch (action.type) {
    case ConsistencyActionTypes.SET_CONSISTENCY:
      return {
        ...state,
        consistencyModel: action.payload.consistencyModel,
        consistencyLatency: action.payload.consistencyLatency,
        consistencyAvailability: action.payload.consistencyAvailability,
      };
    default:
      return state;
  }
};
