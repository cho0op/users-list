import styles from './Challenges.module.css'
import UpdatingObjects from './updating-objects/UpdatingObjects'
import UpdatingArrays from './updating-arrays/UpdatingArrays'

const Challenges = () => {
    return (
        <div className={styles.content}>
            <UpdatingObjects />
            <UpdatingArrays />
        </div>
    )
}

export default Challenges