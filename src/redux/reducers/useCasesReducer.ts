import {
  OltpOlapActions,
  OltpOlapActionTypes,
  OltpOlapState,
  RPS,
} from '../types/useCases';

const initialState: OltpOlapState = {
  oltpOlap: '',
  insertRPS: RPS.OneTen,
  readRPSById: RPS.OneTen,
  readRPSByQuery: RPS.OneTen,
  updateRPS: RPS.OneTen,
  deleteRPS: RPS.LessThan1,
  batchProcessingInsert: false,
  batchProcessingRead: false,
  batchProcessingUpdate: false,
  batchProcessingDelete: false,
  rowSize: '',
};

export const useCasesReducer = (
  state: OltpOlapState = initialState,
  action: OltpOlapActions
): OltpOlapState => {
  switch (action.type) {
    case OltpOlapActionTypes.SET_OLTP_OLAP:
      return { ...state, oltpOlap: action.payload };
    case OltpOlapActionTypes.SET_RPS:
      return { ...state, [action.payload.field]: action.payload.value };
    case OltpOlapActionTypes.SET_BATCH_PROCESSING:
      return { ...state, [action.payload.field]: action.payload.value };
    case OltpOlapActionTypes.SET_ROW_SIZE:
      return { ...state, rowSize: action.payload };
    default:
      return state;
  }
};
