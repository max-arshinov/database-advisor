import {
  OltpOlapActionTypes,
  RPS,
  SetBatchProcessingAction,
  SetOltpOlapAction,
  SetRowSizeAction,
  SetRPSAction,
} from '../types/useCases';

export const setOltpOlap = (value: string): SetOltpOlapAction => ({
  type: OltpOlapActionTypes.SET_OLTP_OLAP,
  payload: value,
});

export const setRPS = (
  field:
    | 'insertRPS'
    | 'readRPSById'
    | 'readRPSByQuery'
    | 'updateRPS'
    | 'deleteRPS',
  value: RPS
): SetRPSAction => ({
  type: OltpOlapActionTypes.SET_RPS,
  payload: { field, value },
});

export const setBatchProcessing = (
  field:
    | 'batchProcessingInsert'
    | 'batchProcessingRead'
    | 'batchProcessingUpdate'
    | 'batchProcessingDelete',
  value: boolean
): SetBatchProcessingAction => ({
  type: OltpOlapActionTypes.SET_BATCH_PROCESSING,
  payload: { field, value },
});

export const setRowSize = (value: string): SetRowSizeAction => ({
  type: OltpOlapActionTypes.SET_ROW_SIZE,
  payload: value,
});
