import { TbBrandMessenger } from 'react-icons/tb';
import { BsPlusSquare } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';

import HistoryFeed from '../historyFeed/HistoryFeed';
import PostSkelet from '../postsSkelet/PostSkelet';

import logo from '../../assets/logo.png';
import './PostFeed.scss';

const PostFeed = () => {
    return (
        <div className='post-feed'> 
            <div className="container">
                <div className="post-feed__menu">
                    <a href="/feed">
                        <img src={logo} alt="LOGO" className='logo'/>
                    </a>
                    <div className="post-feed__menu-items">
                        <a href='/' className="post-feed__menu-item">
                            <BsPlusSquare size={30}/>
                        </a>
                        <a href='/' className="post-feed__menu-item">
                            <TbBrandMessenger size={30}/>
                        </a>
                        <a href='/' className="post-feed__menu-item">
                            <IoMdNotificationsOutline size={30}/>
                        </a>
                    </div>
                </div>
            </div>
            <HistoryFeed/>
            <div className="post">
                <PostSkelet/>
            </div>
        </div>
    );
};

export default PostFeed;