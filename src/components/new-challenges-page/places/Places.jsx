import { useState } from 'react';
import { ImageSizeContext } from './context/Context.js';
import List from './list/List.jsx';

const Places = () => {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <ImageSizeContext.Provider
            value={imageSize}
        >
            <label>
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
        </ImageSizeContext.Provider>
    )
}

export default Places
