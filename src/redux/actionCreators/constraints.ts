import {
  ConstraintsActionTypes,
  ConstraintsState,
  SetConstraintsAction,
} from '@/redux/types/constraints';

export const addConstraints = (
  data: ConstraintsState
): SetConstraintsAction => ({
  type: ConstraintsActionTypes.SET_CONSTRAINTS,
  payload: data,
});
