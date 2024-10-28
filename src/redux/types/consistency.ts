export enum ConsistencyActionTypes {
  SET_CONSISTENCY = 'SET_CONSISTENCY',
}

export interface ConsistencyState {
  consistencyModel: string;
  consistencyLatency: string;
  consistencyAvailability: string;
}

export interface SetConsistencyAction {
  type: ConsistencyActionTypes.SET_CONSISTENCY;
  payload: ConsistencyState;
}

export type ConsistencyAction = SetConsistencyAction;
