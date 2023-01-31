import avatar from '../../assets/close-up-woman-doing-crossfit-workout.jpg';

import './MessagesList.scss';

const MessagesList = () => {
    return (
        <div className='messages-list'>
            <div className='messages-list__message'>
                <img src={avatar} alt="user avatar" className="user-avatar messages-list__message-user-avatar" />
                <div className="messages-list__user-data">
                    <p className='messages-list__message-username'>
                        Username
                    </p>
                    <p className="messages-list__message-spoiler">
                        Привет
                    </p>
                </div>
            </div>
            <div className='messages-list__message'>
                <img src={avatar} alt="user avatar" className="user-avatar messages-list__message-user-avatar" />
                <div className="messages-list__user-data">
                    <p className='messages-list__message-username'>
                        Username
                    </p>
                    <p className="messages-list__message-spoiler">
                        Привет
                    </p>
                </div>
            </div>
            <div className='messages-list__message'>
                <img src={avatar} alt="user avatar" className="user-avatar messages-list__message-user-avatar" />
                <div className="messages-list__user-data">
                    <p className='messages-list__message-username'>
                        Username
                    </p>
                    <p className="messages-list__message-spoiler">
                        Привет
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MessagesList;