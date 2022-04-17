import React, { useContext, useEffect } from "react";
import { Advisor } from "../models/Advisor";
import { getAdvisors } from "../infrastructure/http/requests";
import { IAdvisorsContext } from "../infrastructure/store/context/context";
import { GET_ADVISORS, SET_LOADING } from "../infrastructure/store/context/types";

type Advisors = [advisors: Advisor[], getAdvisors: () => void, isLoading: boolean];

export function useAdvisors(context: React.Context<IAdvisorsContext>): Advisors {
    const { state, dispatch } = useContext(context);

    useEffect(() => {
        dispatch({ type: SET_LOADING, payload: true });
        updateAdvisors()
            .then(() => dispatch({ type: SET_LOADING, payload: false }))
            .catch((e) => console.error(e));
        // eslint-disable-next-line
    }, [state.filters, state.sort]);

    const updateAdvisors = async (): Promise<void> => {
        const advisors = await getAdvisors({
            sort: state.sort,
            filter: state.filters
        });

        dispatch({ type: GET_ADVISORS, payload: advisors });
    }

    return [state.advisors, updateAdvisors, state.isLoading];
}