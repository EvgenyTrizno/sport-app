import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { HiArrowUturnRight } from 'react-icons/hi2';

import avatar from '../../assets/close-up-woman-doing-crossfit-workout.jpg';

import './PostSkelet.scss';

const PostSkelet = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="post__user-wrapper">
                    <img 
                        className='post__user-avatar'
                        src={avatar} 
                        alt="user avatar" />
                    <p className='post__username verified-user'>
                        username
                    </p>
                    <div className="post__username-settings">
                        <BiDotsVerticalRounded size={30}/>
                    </div>
                </div>
                <div className="post__content">
                    <img 
                        src={avatar} 
                        alt="img" 
                        className='post__content-img' />
                </div>
                <div className="post__content-management">
                    <BsHeartFill size={25}/>
                    <FaRegComment size={25}/>
                    <HiArrowUturnRight size={25}/>
                </div> 
                <p className="post__like-others">
                    Нравится <b>/subscriber name/</b> и <b>123,777 другим</b>
                </p>
                <div className="post__descr-wrapper">
                    <p className="post__descr">
                        Только в зале понимаешь сколько силы в этой маленькой девочке. <span className='post__tags'>#gym #sport #sexygirl</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostSkelet;