import { useEffect } from 'react';
import styles from './Card.module.scss';
import hearts from '../../assets/images/hearts.png';

export default function Card(props: any) {
    useEffect(() => {
        console.log('props', props);
    }, []);

    return (
        <div className={styles.Card}>
            <div className={styles.Card__wrapper}>
                <div className={styles.Card__topTypeNumber}>
                    <div className={styles.Card__number}>6</div>
                    <img src={hearts} alt="hearts" className={styles.Card__type} />
                </div>
                <div className={styles.Card__centralType}>
                    <img src={hearts} alt="hearts" className={styles.Card__type} />
                </div>
                <div className={styles.Card__bottomTypeNumber}>
                    <div className={styles.Card__number}>6</div>
                    <img src={hearts} alt="hearts" className={styles.Card__type} />
                </div>
            </div>
        </div>
    )
};