import { useState, useRef } from "react";
import styles from '../Challenges.module.css'

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);
        isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }

    return (
        <div>
            <div className={styles.section_name}>Video player</div>
            <div className={styles.video_grid}>
               <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
            <video width="180" ref={videoRef}>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video> 
            </div>
            
        </div>
    );
}
