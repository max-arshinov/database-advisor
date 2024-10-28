export enum QualityAttributesActionTypes {
  SET_QUALITY_ATTRIBUTES = 'SET_QUALITY_ATTRIBUTES',
}

export interface QualityAttributesState {
  latency: string;
  scalability: string;
  availability: string;
  maintainability: string;
  interoperability: string;
  security: string;
}

export interface SetQualityAttributesAction {
  type: QualityAttributesActionTypes.SET_QUALITY_ATTRIBUTES;
  payload: QualityAttributesState;
}

export type QualityAttributesAction = SetQualityAttributesAction;
