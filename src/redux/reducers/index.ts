import { combineReducers } from 'redux';
import { dataStructureReducer } from './dataStructureReducer';
import { consistencyReducer } from './consistencyReducer';
import { constraintsReducer } from './constraintsReducer';
import { featuresReducer } from './featuresReducer';
import { qualityAttributesReducer } from './qualityAttributesReducer';
import { useCasesReducer } from './useCasesReducer';

export const rootReducer = combineReducers({
  dataStructure: dataStructureReducer,
  consistency: consistencyReducer,
  constraints: constraintsReducer,
  features: featuresReducer,
  qualityAttributes: qualityAttributesReducer,
  useCases: useCasesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
