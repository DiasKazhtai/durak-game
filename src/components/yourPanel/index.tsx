import styles from './YourPanel.module.scss';
import Card from '../card';

export default function YourPanel(props: any) {
    return (
        <div className={styles.YourPanel}>
            <Card />
            <div className={styles.YourPanel__item}>Беру</div>
            <div className={styles.YourPanel__item}>Бито</div>
        </div>
    )
};