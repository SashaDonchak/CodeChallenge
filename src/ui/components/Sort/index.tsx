import React from 'react';
import { Advisor } from "../../../models/Advisor";
import styles from './style.module.scss';
import useSort from "../../../hooks/useSort";
import { AdvisorsContext } from "../../../infrastructure/store/context/context";

interface ISortProps {
    label?: keyof Advisor;
}

const Sort: React.FC<ISortProps> = ({ label = 'reviews' }) => {
    const [sort, changeSort] = useSort(AdvisorsContext);

    return (
        <div className={`${styles.sort} col-md-2 col-sm-6`}>
            <span className={styles.sort__label}>Sort by {label}</span>
            <select
                value={sort ? sort[1] : ''}
                className={styles.sort__select}
                onChange={
                    (e) => changeSort(label, e.target.value as 'ASC' | 'DESC')
                }
            >
                <option value="" disabled>Choose here</option>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
            </select>
        </div>
    );
};

export default Sort;