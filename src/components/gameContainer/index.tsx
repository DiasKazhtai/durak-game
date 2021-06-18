import styles from './GameContainer.module.scss';
import Table from '../table';
import YourPanel from '../yourPanel';

export default function GameContainer(props: any) {
    return (
        <div className={styles.GameContainer}>
            <Table />
            <YourPanel />
        </div>
    )
};