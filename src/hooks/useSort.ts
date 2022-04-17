import React, { useContext } from 'react';
import { IAdvisorsContext } from "../infrastructure/store/context/context";
import { Advisor } from "../models/Advisor";
import { SET_SORT } from "../infrastructure/store/context/types";

type Sort = [sort: [keyof Advisor, 'ASC' | 'DESC'] | undefined, changeSort: (key: keyof Advisor, value: 'ASC' | 'DESC') => void];

export default function useSort(context: React.Context<IAdvisorsContext>): Sort {
    const { state, dispatch } = useContext(context);
    const changeSort = (key: keyof Advisor, value: 'ASC' | 'DESC') => {
        dispatch({ type: SET_SORT, payload: [key, value] });
    }

    return [state.sort, changeSort];
}