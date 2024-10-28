import {
  DataStructureActionTypes,
  DataStructureState,
  SetDataStructureAction,
} from '../types/dataStructure';

export const addDataStructure = (
  data: DataStructureState
): SetDataStructureAction => ({
  type: DataStructureActionTypes.SET_DATA_STRUCTURE,
  payload: data,
});
