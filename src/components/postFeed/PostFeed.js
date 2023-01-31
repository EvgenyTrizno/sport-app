import { IoMdNotificationsOutline } from 'react-icons/io';

import HistoryFeed from '../historyFeed/HistoryFeed';
import PostSkelet from '../postsSkelet/PostSkelet';
import MainMenu from '../mainMenu/MainMenu';

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
                            <IoMdNotificationsOutline size={30}/>
                        </a>
                    </div>
                </div>
            </div>
            <HistoryFeed/>
            <div className="post">
                <PostSkelet/>
            </div>
            <MainMenu/>
        </div>
    );
};

export default PostFeed;