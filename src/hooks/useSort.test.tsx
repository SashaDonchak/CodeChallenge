import React from "react";
import { AdvisorsContext } from "../infrastructure/store/context/context";
import { renderHook } from "@testing-library/react";
import { AppState } from "../infrastructure/store/context/reducer";
import useSort from "./useSort";
import { SET_SORT } from "../infrastructure/store/context/types";

const state: AppState = {
    isLoading: false,
    advisors: [],
    filters: {
        status: ['offline']
    },
    sort: ['reviews', 'ASC']
};

const mockedDispatch = jest.fn();

const ContextProvider = ({ children }: { children: React.ReactNode }) => (
    <AdvisorsContext.Provider value={{
        state, dispatch: mockedDispatch
    }}>{children}</AdvisorsContext.Provider>
);

const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <ContextProvider>{children}</ContextProvider>
}

describe('useSort', () => {
    it('Returns current sort', () => {
        const { result } = renderHook(() => useSort(AdvisorsContext), { wrapper });
        const [sort] = result.current;
        expect(sort).toBe(state.sort);
    });

    it('Returns working change function', () => {
        const { result } = renderHook(() => useSort(AdvisorsContext), { wrapper });
        const [, changeSort] = result.current;
        changeSort('reviews', 'DESC');
        expect(mockedDispatch).toHaveBeenCalledWith({ type: SET_SORT, payload: ['reviews', 'DESC'] });
    })
});