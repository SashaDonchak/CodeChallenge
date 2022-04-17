import React, { useContext } from "react";
import { IAdvisorsContext } from "../infrastructure/store/context/context";
import { Advisor, AdvisorLang, AdvisorStatus } from "../models/Advisor";
import { SET_FILTER } from "../infrastructure/store/context/types";

export type FilterValues = AdvisorLang | AdvisorStatus;
export type FilterKeys = 'status' | 'lang';

type Filter = [filters: { [K in keyof Advisor]?: Advisor[K][] }, changeFilter: (filterKey: FilterKeys, filterValue: FilterValues) => void];

export default function useFilter(context: React.Context<IAdvisorsContext>): Filter {
    const { state, dispatch } = useContext(context);

    const changeFilter = (filterKey: FilterKeys, filterValue: FilterValues): void => {
        const filters = {
            ...state.filters
        };

        if (!filters[filterKey]) filters[filterKey] = [];
        let filterArr: any[] | undefined = filters[filterKey];
        if (filterArr) {
            if (filterArr.includes(filterValue)) filterArr = filterArr.filter((val) => val !== filterValue)
            else filterArr = filterArr.concat([filterValue]);

            filters[filterKey] = filterArr;
        }

        dispatch({ type: SET_FILTER, payload: filters });
    };

    return [state.filters, changeFilter];
}