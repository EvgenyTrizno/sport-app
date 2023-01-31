import { AiOutlineArrowLeft } from 'react-icons/ai';

import MainMenu from '../mainMenu/MainMenu';

import avatar from '../../assets/close-up-woman-doing-crossfit-workout.jpg';
import './SearchPanel.scss';

const SearchPanel = () => {
    return (
        <div className='search-page'>
            <div className="container">
                <div className="search-page__input-wrapper">
                    <AiOutlineArrowLeft size={25}/>
                    <input 
                        type="text" 
                        className="search-page__input" 
                        placeholder="Поиск"
                    />
                </div>
                <div className="search-page__result">
                    <div className="search-page__result-item">
                        <img 
                            className='post__user-avatar user-avatar'
                            src={avatar}
                            alt="user avatar"/>
                        <p className='post__username search-page__username'>
                            username
                        </p>
                    </div>
                </div>
            </div>
            <MainMenu/>
        </div>
    );
};

export default SearchPanel;