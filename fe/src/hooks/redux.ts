// read on redux.org

import { useSelector, useDispatch } from "react-redux";
import type { AppDisPatch, RootState } from "../redux/stores/stores";


export const useAppDispath = useDispatch.withTypes<AppDisPatch>();
export const useAppSelector = useSelector.withTypes<RootState>()