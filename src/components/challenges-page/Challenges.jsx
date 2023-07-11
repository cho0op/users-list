import styles from './Challenges.module.css';
import UpdatingObjects from './updating-objects/UpdatingObjects';
import UpdatingArrays from './updating-arrays/UpdatingArrays';
import Messenger from './messenger/Messenger';
import Places from './places/Places';
import VideoPlayer from './video-player/VideoPlayer';
import Form from './form/Form';
import Counter from './counter/Counter';

const Challenges = () => {
    return (
        <div className={styles.content}>
            <div className={styles.content_grid}>
                <UpdatingObjects />
                <UpdatingArrays />
                <Messenger />
                <VideoPlayer />
                <Form />
                <Counter />
            </div>
            <Places />
        </div>
    );
};

export default Challenges;
