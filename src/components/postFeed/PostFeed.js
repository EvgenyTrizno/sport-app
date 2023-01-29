import { FaUserCircle } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbBrandMessenger } from 'react-icons/tb';
import { BsPlusSquare } from 'react-icons/bs';

import './PostFeed.scss';

const PostFeed = () => {
    return (
        <div className='post-feed bg-neutral-800'> 
            <div className="post-feed__menu">
                <img src="" alt="LOGO" />
                <div className="post-feed__menu-items">
                    <a href='/' className="post-feed__menu-item">
                        <TbBrandMessenger size={30}/>
                    </a>
                    <a href='/' className="post-feed__menu-item">
                        <BsPlusSquare size={30}/>
                    </a>
                </div>
            </div>
            <div className="history-feed flex overflow-hidden pt-4 pl-3 pb-4">
                <div className="history-feed__create-history text-center mr-3.5">
                    <div className='h-16 w-16 border-solid border-orange-600 border-4 rounded-full flex justify-center items-center'>
                        <AiOutlinePlus size={30} className='text-orange-600'/>
                    </div>
                    <p className='history-feed__username text-white'>
                        Вы
                    </p>
                </div>
                <div className="history-feed__wrapper flex">
                    <div className="history-feed__user-history text-center text-white">
                        <FaUserCircle size={36} className='rounded-full h-16 w-16 border-solid border-orange-600 border-4'/>
                        <p className='history-feed__username text-white'>
                            name
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostFeed;