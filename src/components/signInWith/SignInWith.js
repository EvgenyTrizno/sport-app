import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io';
import { SiHuawei, SiXiaomi } from 'react-icons/si';

const SignInWith = () => {
    return (
        <div className='flex justify-around mt-7'>
            <button className='bg-white px-3 py-1 rounded-md'>
                <FcGoogle size={24}/>
            </button>
            <button className='bg-white px-3 py-1 rounded-md'>
                <IoLogoApple size={24}/>
            </button>
            <button className='bg-white px-3 py-1 rounded-md'>
                <SiHuawei size={24} className='text-rose-600'/>
            </button>
            <button className='bg-white px-3 py-1 rounded-md'>
                <SiXiaomi size={24} className='text-orange-600'/>
            </button>
        </div>
    );
};

export default SignInWith;