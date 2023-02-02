import MainMenu from '../mainMenu/MainMenu';

import avatar from '../../assets/close-up-woman-doing-crossfit-workout.jpg';
import './UserProfile.scss';

const UserProfile = () => {
    return (
        <div className='profile'>
            <div className="container">
                <div className="profile__user-data">
                    <img src={avatar} alt="user avatar" className='profile__user-avatar'/>
                    <p className='profile__username username'>
                        Username
                    </p>
                </div>
                <div className="profile__user-successes">
                    <div className="profile__user-successe">
                        <p>1</p>
                        <span>Посты</span>
                    </div>
                    <div className="profile__user-successe">
                        <p>1M</p>
                        <span>Подписчиков</span>
                    </div>
                    <div className="profile__user-successe">
                        <p>10</p>
                        <span>Подписки</span>
                    </div>
                </div>
                <div className="profile__menu">
                    <div className="profile__menu-inner">
                        <button className="profile__menu-btn">
                            Посты
                        </button>
                        <button className="profile__menu-btn">
                            Видео
                        </button>
                    </div>
                </div>
                <div className="content">
                    <div className="profile__user-content">
                        <div>
                            <img src={avatar} alt="" />
                        </div>
                        <div>
                            <img src={avatar} alt="" />
                        </div>
                        <div>
                            <img src={avatar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <MainMenu/>
        </div>
    );
};

export default UserProfile;