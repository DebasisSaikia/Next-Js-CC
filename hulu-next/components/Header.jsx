import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <header className='flex flex-col sm:flex-row  justify-between items-center'>
                <div className='flex flex-grow justify-evenly max-w-2xl mt-5'>
                    <HeaderItem title='HOME' Icon={HomeIcon} />
                    <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                    <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                    <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                    <HeaderItem title='SEARCH' Icon={SearchIcon} />
                    <HeaderItem title='ACCOUNT' Icon={UserIcon} />
                </div>
                <Image className='object-contain'
                    src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680'
                    width={200} height={100} />
            </header>
            <Navbar />
        </>
    )
}

export default Header
