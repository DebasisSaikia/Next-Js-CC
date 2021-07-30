import request from "../utils/request"
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter();

    return (
        <nav className='relative'>
            <div className='flex justify-between px-10 sm:px-20 text-2xl whitespace-nowrap space-x-8 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {Object.entries(request).map(([key, { title, url }]) => (
                    <h2 key={key} onClick={() => router.push(`/?genre=${key}`)} className=' last:pr-15 cursor-pointer transition duration-100
                     transform hover:scale-105 hover:text-white active:text-yellow-600' >
                        {title}</h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
        </nav>
    )
}

export default Navbar
