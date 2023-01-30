import { FaUserCircle } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

import './HistoryFeed.scss';

const HistoryFeed = () => {
    return (
        <div className="history-feed">
            <div className="container">
                <div className="history-feed__wrapper">
                    <div className="history-feed__create-history">
                        <div className='history-feed__create-history__icon history-feed__create-history__icon_orange'>
                            <AiOutlinePlus size={30}/>
                        </div>
                        <p className='history-feed__username'>
                            Вы
                        </p>
                    </div>
                    <div className="history-feed__user-history">
                        <FaUserCircle size={36} className='history-feed__user-history__icon'/>
                        <p className='history-feed__username'>
                            name
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryFeed;