import {
  ConsistencyActionTypes,
  ConsistencyState,
  SetConsistencyAction,
} from '@/redux/types/consistency';

export const addConsistency = (
  data: ConsistencyState
): SetConsistencyAction => ({
  type: ConsistencyActionTypes.SET_CONSISTENCY,
  payload: data,
});
