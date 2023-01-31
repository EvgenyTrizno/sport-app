import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineFileSearch, AiOutlinePlusCircle } from 'react-icons/ai'
import { MdSlowMotionVideo } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { TbBrandMessenger } from 'react-icons/tb';

import './MainMenu.scss';

const MainMenu = () => {
    return (
        <div className="main-menu">
            <div className="main-menu__inner">
                <div className="container">
                    <div className="main-menu__icons">
                        <Link to="/feed">
                            <AiOutlineHome size={30}/>
                        </Link>
                        <Link to="/search">
                            <AiOutlineFileSearch size={30}/>
                        </Link>
                        <Link to="/short-video">
                            <MdSlowMotionVideo size={30}/>
                        </Link>
                        <Link to="/create-post">
                            <AiOutlinePlusCircle size={30}/>
                        </Link>
                        <Link to="/messenger">
                            <TbBrandMessenger size={30}/>
                        </Link>
                        <Link to="/profile">
                            <BiUserCircle size={30}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;