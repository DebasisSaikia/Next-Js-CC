import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/main.png" width={100} height={77} />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'> About</Link>
            <Link href='/lists'>Person list</Link>
        </nav>

    )
}

export default Navbar
