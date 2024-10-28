import {
  FeaturesActionTypes,
  FeaturesState,
  SetFeaturesAction,
} from '@/redux/types/features';

export const addFeatures = (data: FeaturesState): SetFeaturesAction => ({
  type: FeaturesActionTypes.SET_FEATURES,
  payload: data,
});
