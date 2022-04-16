import React from 'react';
import FilterValue from "./FilterValue";
import styles from './style.module.scss';
import { AdvisorsContext } from "../../../../infrastructure/store/context/context";
import useFilter, { FilterValues, FilterKeys } from "../../../../hooks/useFilter";

interface IFilterProps {
    filterKey: FilterKeys;
    values: FilterValues[];
}

const Filter: React.FC<IFilterProps> = ({
    filterKey,
    values
}) => {
    const [filters, changeFilter] = useFilter(AdvisorsContext);
    const checkedValues: FilterValues[] = filters[filterKey] ?? [];

    return (
        <div className={`col-md-2 col-sm-6 ${styles.filter}`}>
            <span className={styles.filter__header}>
                Filter by: {filterKey}
            </span>
            <div className={styles.filter__values}>
                {
                    values.map((val) =>
                        <FilterValue
                            isChecked={checkedValues.includes(val)}
                            onChange={() => changeFilter(filterKey, val)}
                            label={val}
                            key={val}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Filter;