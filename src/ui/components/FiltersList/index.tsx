import React from 'react';
import Filter from "./Filter";

const FiltersList = () => {
    return (
        <div className="row">
            <Filter key={'status'} filterKey={'status'} values={['online', 'offline']} />
            <Filter key={'lang'} filterKey={'lang'} values={['en', 'de', 'es', 'it']} />
        </div>
    );
};

export default FiltersList;