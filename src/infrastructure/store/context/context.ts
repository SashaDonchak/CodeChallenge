import React, { createContext } from "react";
import { AppState, IAction } from "./reducer";

export interface IAdvisorsContext {
    state: AppState,
    dispatch: React.Dispatch<IAction>
}

export const AdvisorsContext = createContext<IAdvisorsContext>({} as IAdvisorsContext);