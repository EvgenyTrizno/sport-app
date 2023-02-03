import { useCallback, useState } from 'react';
import { FaPause, FaShare } from 'react-icons/fa';
import { AiFillLike, AiFillDislike, AiOutlineComment } from 'react-icons/ai';

import avatar from '../../assets/close-up-woman-doing-crossfit-workout.jpg';
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
                        <div className="controls__menu">
                            <div className="controls__menu-item">
                                <span>
                                    <AiFillLike size={35}/>
                                    10к
                                </span>
                            </div>
                            <div className="controls__menu-item">
                                <span>
                                    <AiFillDislike size={35}/>
                                </span>
                            </div>
                            <div className="controls__menu-item">
                                <span>
                                    <AiOutlineComment size={35}/>
                                    10
                                </span>
                            </div>
                            <div className="controls__menu-item">
                                <span>
                                    <FaShare size={35}/>
                                    500
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="short-video__user">
                        <div className='short-video__user-inner'>
                            <img src={avatar} alt="user avatar" className='short-video__user-avatar'/>
                            <p className='short-video__username'>username</p>
                            <button className="subscribe-btn short-video__subscribe-btn">
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortVideo;