import styles from './NewChallenges.module.css'
import Messenger from "./messenger/Messenger"

const NewChallenges = () => {
    return (
        <div className={styles.content}>
            <Messenger />
        </div>
    )
}

export default NewChallenges