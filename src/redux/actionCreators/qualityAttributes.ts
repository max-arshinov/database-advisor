import {
  QualityAttributesActionTypes,
  QualityAttributesState,
  SetQualityAttributesAction,
} from '@/redux/types/qualityAttributes';

export const addQualityAttributes = (
  data: QualityAttributesState
): SetQualityAttributesAction => ({
  type: QualityAttributesActionTypes.SET_QUALITY_ATTRIBUTES,
  payload: data,
});
