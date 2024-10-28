import { AnyAction } from 'redux';
import {
  QualityAttributesAction,
  QualityAttributesActionTypes,
  QualityAttributesState,
} from '@/redux/types/qualityAttributes';

const initialState: QualityAttributesState = {
  latency: '',
  scalability: '',
  availability: '',
  maintainability: '',
  interoperability: '',
  security: '',
};

export const qualityAttributesReducer = (
  state: QualityAttributesState = initialState,
  action: QualityAttributesAction | AnyAction
): QualityAttributesState => {
  switch (action.type) {
    case QualityAttributesActionTypes.SET_QUALITY_ATTRIBUTES:
      return {
        ...state,
        latency: action.payload.latency,
        scalability: action.payload.scalability,
        availability: action.payload.availability,
        maintainability: action.payload.maintainability,
        interoperability: action.payload.interoperability,
        security: action.payload.security,
      };
    default:
      return state;
  }
};
