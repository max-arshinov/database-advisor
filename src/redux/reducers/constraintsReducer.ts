import { AnyAction } from 'redux';
import {
  ConstraintsAction,
  ConstraintsActionTypes,
  ConstraintsState,
} from '@/redux/types/constraints';

const initialState: ConstraintsState = {
  licence: '',
  hostingOption: '',
  prioritizeManagedCloudServices: false,
  prioritizeCostEfficientOptions: false,
  pricingModel: '',
  supportedApi: '',
};

export const constraintsReducer = (
  state: ConstraintsState = initialState,
  action: ConstraintsAction | AnyAction
): ConstraintsState => {
  switch (action.type) {
    case ConstraintsActionTypes.SET_CONSTRAINTS:
      return {
        ...state,
        licence: action.payload.licence,
        hostingOption: action.payload.hostingOption,
        prioritizeManagedCloudServices:
          action.payload.prioritizeManagedCloudServices,
        prioritizeCostEfficientOptions:
          action.payload.prioritizeCostEfficientOptions,
        pricingModel: action.payload.pricingModel,
        supportedApi: action.payload.supportedApi,
      };
    default:
      return state;
  }
};
