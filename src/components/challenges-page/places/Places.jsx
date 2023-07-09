import { useState } from 'react';
import { ImageSizeContext } from './context/Context.js';
import List from './list/List.jsx';
import styles from '../Challenges.module.css'

const Places = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <ImageSizeContext.Provider
            value={imageSize}
        >
            <div className={styles.places}>
                <label>
                    <div className={styles.section_name}>Places</div>
                    <input
                        type="checkbox"
                        checked={isLarge}
                        onChange={e => {
                            setIsLarge(e.target.checked);
                        }}
                    />
                    Use large images
                </label>
                <List />
            </div>
        </ImageSizeContext.Provider>
    )
}

export default Places
