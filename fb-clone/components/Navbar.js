import React from 'react';
import Image from 'next/image';
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/client';

const Navbar = () => {

    const [session] = useSession()
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">

            {/* left side */}
            <div className="flex items-center">
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
                    alt="fb-logo" width={40} height={40} layout='fixed' />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 w-6 text-gray-500" />
                    <input type="text" name="search" id="search" placeholder="Search" className="hidden md:inline-flex flex-shrink flex ml-2 items-center outline-none bg-transparent" />
                </div>
            </div>

            {/* center section */}

            <div>
                <div className="flex space-x-6 md:space-x-2 justify-center flex-grow items-center">
                    <HomeIcon className="h-5 cursor-pointer md:px-10 sm:h-7 md:hover:bg-gray-200 rounded-xl active:border-b-2 active:border-blue-500 hover:text-blue-500 text-gray-500" />
                    <FlagIcon className="h-5 cursor-pointer md:px-10 sm:h-7 md:hover:bg-gray-200 rounded-xl active:border-b-2 active:border-blue-500 hover:text-blue-500 text-gray-500" />
                    <PlayIcon className="h-5 cursor-pointer md:px-10 sm:h-7 md:hover:bg-gray-200 rounded-xl active:border-b-2 active:border-blue-500 hover:text-blue-500 text-gray-500" />
                    <ShoppingCartIcon className="h-5 cursor-pointer md:px-10 sm:h-7 md:hover:bg-gray-200 rounded-xl active:border-b-2 active:border-blue-500 hover:text-blue-500 text-gray-500" />
                    <UserGroupIcon className="h-5 cursor-pointer md:px-10 sm:h-7 md:hover:bg-gray-200 rounded-xl active:border-b-2 active:border-blue-500 hover:text-blue-500 text-gray-500" />
                    <h2 className="opacity-0">fffdd</h2>
                </div>
            </div>

            {/* right icons */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* profile */}
                <Image width={40} height={40} alt={session.user.name} src={session.user.image} className="rounded-full cursor-pointer" onClick={signOut} />
                <p className="sm:text-sm lg:text-md md:font-semibold whitespace-nowrap pr-3">{session.user.name}</p>
                <ViewGridIcon className="icon xl: inline-flex" />
                <ChatIcon className="icon xl: inline-flex" />
                <BellIcon className="icon xl: inline-flex" />
                <ChevronDownIcon className="icon xl: inline-flex" />

            </div>
        </div>
    )
}

export default Navbar
