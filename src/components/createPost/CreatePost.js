import { GoFileMedia } from 'react-icons/go';

import './CreatePost.scss';

const CreatePost = () => {
    return (
        <div className='create-post'>
            <div className="create-post__tags">
                <input
                    type="text" 
                    placeholder='Описание'
                    className='create-post__tags-input'/>
            </div>
            <label className='create-post__input'>
                <input type="file" name="file" />
                Выбрать файл
                <GoFileMedia size={30}/>
            </label>
        </div>
    );
};

export default CreatePost;  