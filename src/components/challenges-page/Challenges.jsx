import styles from './Challenges.module.css'
import UpdatingObjects from './updating-objects/UpdatingObjects'

const Challenges = () => {
    return (
        <div className={styles.content}>
            <UpdatingObjects />
        </div>
    )
}

export default Challenges