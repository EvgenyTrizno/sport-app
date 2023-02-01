import MainMenu from '../mainMenu/MainMenu';

import avatar from '../../assets/close-up-woman-doing-crossfit-workout.jpg';
import './UserProfile.scss';

const UserProfile = () => {
    return (
        <div className='profile'>
            <div className="container">
                <div className="profile__user-data">
                    <div className="profile__user-data__inner">
                        <img src={avatar} alt="" className="profile__user-avatar" />
                        <p className="profile__username username">
                            Username
                        </p>
                    </div>
                    <div className="profile__user-data__successes">
                        <div className="profile__user-data__successes-item">
                            <span>
                                1,000
                            </span>
                            <h3>
                                Посты
                            </h3>
                        </div>
                        <div className="profile__user-data__successes-item">
                            <span>
                                1M
                            </span>
                            <h3>
                                Подписчиков
                            </h3>
                        </div>
                        <div className="profile__user-data__successes-item">
                            <span>
                                10
                            </span>
                            <h3>
                                Подписки
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="profile__more">
                    <p className="profile__more-title">
                        Описание
                    </p>
                </div>
            </div>
            <MainMenu/>
        </div>
    );
};

export default UserProfile;