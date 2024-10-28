import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
