import { useCallback, useState } from 'react';
import { FaPause } from 'react-icons/fa';

import video from '../../assets/video/video.mp4';
import './ShortVideo.scss';

const ShortVideo = () => {
    const [progress, setProgress]= useState(1);

    const toggleVideo = useCallback(e => {
        const stopClass = document.body.querySelector('.controls__stop');

        if (e.target.paused) {
            e.target.play();
            stopClass.style.opacity = 0;
        } else {
            e.target.pause();
            stopClass.style.opacity = 1;
        }
        
    }, []);

    const updateProgress = e => {
        setProgress((e.target.currentTime * 100) / e.target.duration)
    }

    return (
        <div className='short-video'>
            <div className="container">
                <div className="short-video__player">
                    <video
                        src={video} 
                        loop
                        autoPlay
                        onClick={toggleVideo}
                        onTimeUpdate={updateProgress}
                    />
                    <div className="controls">
                        <div className="controls__stop">
                            <FaPause size={50}/>
                        </div>
                        <div className="controls__progress">
                            <div className="controls__progress-bg" style={{width: `${progress}%`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortVideo;