import { BiSearchAlt, BiChat } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import MessagesList from '../messagesList/MessagesList';

import './Messenger.scss';

const Messenger = () => {
    return (
        <div className='messenger'>
            <div className="container">
                <div className="messenger__management">
                    <AiOutlineArrowLeft size={25}/>

                        {/* ДОРАБОТАТЬ! */}
                        <select>
                            <option value="messeges">Сообщения</option>
                            <option value="messeges">Сообщения</option>
                        </select>
                    <div className="messenger__management-menu">
                        <BiChat size={20}/>
                    </div>
                </div>
                <div className="messenger__search">
                    <button className='messenger__search-btn'>
                        <BiSearchAlt/>
                    </button>
                    <input 
                        type="text" 
                        placeholder='Найти сообщение'
                        className="messenger__search-input" 
                    />
                </div>
                <MessagesList/>
            </div>
        </div>
    );
};

export default Messenger;