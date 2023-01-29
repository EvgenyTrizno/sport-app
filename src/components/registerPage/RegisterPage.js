import { Link } from 'react-router-dom';

import SignInWith from '../../components/signInWith/SignInWith';

import './RegisterPage.scss';

const RegisterPage = () => {
    return (
        <>
            <div className='reg-form__wrapper'></div>
            <Link to='/auth' className='auth-link text-white absolute top-10 right-20 text-xl font-bold  hover:text-orange-600 duration-300' >Войти</Link>
            <div className='form-wrapper'>
            <h2 className='text-white text-center mb-7 text-xl font-bold uppercase'>Зарегистрировать учётную запись</h2>
                <form className='flex flex-col'>
                    <input
                        placeholder='Введите Имя' 
                        type="text" 
                        name='name'
                        className='bg-neutral-800/70 rounded-xl h-14 mb-2 text-white p-4 outline-white'/>
                    <input
                        placeholder='Введите Email' 
                        type="email"
                        name='email'
                        className='bg-neutral-800/70 rounded-xl h-14 mb-2 text-white p-4 outline-white' />
                    <input
                        placeholder='Введите пароль'
                        name='password'
                        type="text" 
                        className='bg-neutral-800/70 rounded-xl h-14 mb-4 text-white p-4 outline-white' />
                    <button 
                        type='submit' 
                        className='text-white h-10 bg-orange-600 rounded-xl uppercase hover:bg-orange-700 duration-300 text-center'>Зарегистрироваться</button>
                </form>
                <SignInWith/>
            </div>
        </>
    );
};

export default RegisterPage;   