import { GET_ADVISORS, SET_FILTER, SET_LOADING, SET_SORT } from "./types";
import { Advisor } from "../../../models/Advisor";

type ActionType = typeof GET_ADVISORS | typeof SET_FILTER | typeof SET_SORT | typeof SET_LOADING;
export interface IAction {
    type: ActionType,
    payload: any
}

type Dispatcher = (state: AppState, action: IAction) => AppState;
export interface AppState {
    isLoading: boolean;
    advisors: Advisor[];
    filters: { [K in keyof Advisor]?: Advisor[K][] };
    sort?: [keyof Advisor, 'ASC' | 'DESC'];
}

const handlers: Record<ActionType, Dispatcher> = {
    [GET_ADVISORS]:
        (state: AppState, { payload }: { payload: Advisor[] }): AppState => ({ ...state, advisors: payload }),
    [SET_FILTER]:
        (state: AppState, { payload }: { payload: { [K in keyof Advisor]?: Advisor[K][] } }): AppState =>
            ({ ...state, filters: payload }),
    [SET_SORT]:
        (state: AppState, { payload }: { payload: [keyof Advisor, 'ASC' | 'DESC'] }): AppState =>
            ({ ...state, sort: payload }),
    [SET_LOADING]:
        (state: AppState, { payload }: { payload: boolean }): AppState => ({ ...state, isLoading: payload }),
};

export const AdvisorsContextReducer = (state: AppState, action: IAction): AppState => {
    const handle = handlers[action.type];
    if (!handle) return state;

    return handle(state, action);
}