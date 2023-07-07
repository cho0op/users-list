import styles from './NewChallenges.module.css'
import Messenger from "./messenger/Messenger"
import Places from './places/Places'

const NewChallenges = () => {
    return (
        <div className={styles.content}>
            <Messenger />
            <div className="">
                <Places />
            </div>
        </div>
    )
}

export default NewChallenges