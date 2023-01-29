import { Link } from 'react-router-dom';

import SignInWith from '../../components/signInWith/SignInWith';

import './AuthPage.scss';

const AuthPage = () => {
    return (
        <>
            <div className='log-form__wrapper'></div>
            <Link to='/registration' className='auth-link text-white absolute top-10 right-20 text-xl font-bold  hover:text-orange-600 duration-300' >Регистрация</Link>
            <div className='form-wrapper'>
                <h2 className='text-white text-center mb-7 text-xl font-bold uppercase'>Войти в учётную запись</h2>
                <form className='flex flex-col'>
                    <input
                        placeholder='Введите Email' 
                        name='email'
                        type="email" 
                        className='bg-neutral-800/70 rounded-xl h-14 mb-2 text-white p-4 outline-white' />
                    <input
                        placeholder='Введите пароль' 
                        name='password'
                        type="text" 
                        className='bg-neutral-800/70 rounded-xl h-14 mb-4 text-white p-4 outline-white' />
                    <button
                        type='submit' 
                        className='text-white h-10 bg-orange-600 rounded-xl uppercase  hover:bg-orange-700 duration-300 text-center'>Войти</button>
                </form>
                <SignInWith/>
            </div>
        </>
    );
};

export default AuthPage;
