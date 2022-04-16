import React from 'react';
import { Advisor } from "../../../models/Advisor";
import styles from './style.module.scss';

interface IAdvisorCardProps {
    advisor: Advisor;
}

const AdvisorCard: React.FC<IAdvisorCardProps> = ({ advisor }) => {
    const { firstName, lastName, status, lang, reviews } = advisor;
    return (
        <div className={`col-md-4 col-sm-12 ${styles.card__wrapper}`}>
            <div className={styles.card}>
                <div className={styles.card__header}>
                    <h3>{`${firstName} ${lastName}`}</h3>
                    <div className={`${styles.card__status} ${styles[`card__status_${status}`]}`}>
                        {status}
                    </div>
                </div>
                <div className={styles.card__language}>Language: <span>{lang}</span></div>
                <div className={styles.card__reviews}>Reviews count: <span>{reviews.length}</span></div>
            </div>
        </div>
    );
};

export default AdvisorCard;