export enum ConstraintsActionTypes {
  SET_CONSTRAINTS = 'SET_CONSTRAINTS',
}

export interface ConstraintsState {
  licence: string;
  hostingOption: string;
  prioritizeManagedCloudServices: boolean;
  prioritizeCostEfficientOptions: boolean;
  pricingModel: string;
  supportedApi: string;
}

export interface SetConstraintsAction {
  type: ConstraintsActionTypes.SET_CONSTRAINTS;
  payload: ConstraintsState;
}

export type ConstraintsAction = SetConstraintsAction;
