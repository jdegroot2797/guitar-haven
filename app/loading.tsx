import Image from 'next/image';
import loader from '@/assets/loader.gif';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <Image src={loader} height={50} width={50} alt='Loading...' />
            <p>Loading</p>
        </div>
    );
}

export default Loading;