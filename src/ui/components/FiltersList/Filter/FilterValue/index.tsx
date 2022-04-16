import React from 'react';
import styles from './style.module.scss';

interface IFilterValueProps {
    isChecked: boolean;
    onChange: () => void;
    label: string;
}

const FilterValue: React.FC<IFilterValueProps> = ({
    isChecked,
    onChange,
    label
}) => {
    return (
        <label className={styles.label}>
            <input type="checkbox" hidden={true} onChange={onChange} />
            <span aria-hidden={true} className={`${styles.checkbox} ${isChecked ? styles.checkbox_checked : ''}`} >
                { label }
            </span>
        </label>
    );
};

export default FilterValue;