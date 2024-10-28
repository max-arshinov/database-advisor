export enum OltpOlapActionTypes {
  SET_OLTP_OLAP = 'SET_OLTP_OLAP',
  SET_RPS = 'SET_RPS',
  SET_BATCH_PROCESSING = 'SET_BATCH_PROCESSING',
  SET_ROW_SIZE = 'SET_ROW_SIZE',
}

export enum RPS {
  LessThan1 = '<1',
  OneTen = '1-10',
  TenHundred = '10-100',
}

export interface OltpOlapState {
  oltpOlap: string;
  insertRPS: RPS;
  readRPSById: RPS;
  readRPSByQuery: RPS;
  updateRPS: RPS;
  deleteRPS: RPS;
  batchProcessingInsert: boolean;
  batchProcessingRead: boolean;
  batchProcessingUpdate: boolean;
  batchProcessingDelete: boolean;
  rowSize: string;
}

export interface SetOltpOlapAction {
  type: OltpOlapActionTypes.SET_OLTP_OLAP;
  payload: string;
}

export interface SetRPSAction {
  type: OltpOlapActionTypes.SET_RPS;
  payload: {
    field:
      | 'insertRPS'
      | 'readRPSById'
      | 'readRPSByQuery'
      | 'updateRPS'
      | 'deleteRPS';
    value: RPS;
  };
}

export interface SetBatchProcessingAction {
  type: OltpOlapActionTypes.SET_BATCH_PROCESSING;
  payload: {
    field:
      | 'batchProcessingInsert'
      | 'batchProcessingRead'
      | 'batchProcessingUpdate'
      | 'batchProcessingDelete';
    value: boolean;
  };
}

export interface SetRowSizeAction {
  type: OltpOlapActionTypes.SET_ROW_SIZE;
  payload: string;
}

export type OltpOlapActions =
  | SetOltpOlapAction
  | SetRPSAction
  | SetBatchProcessingAction
  | SetRowSizeAction;
