import React from 'react';
import AdvisorCard from "../AdvisorCard";
import styles from './style.module.scss';
import { AdvisorsContext } from "../../../infrastructure/store/context/context";
import { useAdvisors } from "../../../hooks/useAdvisors";
import Loader from "../Loader";

const AdvisorsList = () => {
    const [advisors,, isLoading] = useAdvisors(AdvisorsContext);

    return (
        <div className={`row ${styles.list}`}>
            {
                isLoading
                    ? <Loader />
                    : advisors.map((advisor) =>
                        <AdvisorCard advisor={advisor} key={advisor.id}/>
                    )}
        </div>
    );
};

export default AdvisorsList;