import { AnyAction } from 'redux';
import {
  DataStructureAction,
  DataStructureActionTypes,
  DataStructureState,
} from '../types/dataStructure';

const initialState: DataStructureState = {
  dataStructure: '',
  meanUnitSize: '5',
  maxUnitSize: '8',
  dbSize: '100',
  dbSizeGrowth: '5',
};

export const dataStructureReducer = (
  state: DataStructureState = initialState,
  action: DataStructureAction | AnyAction
): DataStructureState => {
  switch (action.type) {
    case DataStructureActionTypes.SET_DATA_STRUCTURE:
      return {
        ...state,
        dataStructure: action.payload.dataStructure,
        meanUnitSize: action.payload.meanUnitSize,
        maxUnitSize: action.payload.maxUnitSize,
        dbSize: action.payload.dbSize,
        dbSizeGrowth: action.payload.dbSizeGrowth,
      };
    default:
      return state;
  }
};
