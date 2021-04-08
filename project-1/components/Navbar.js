import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Person List</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'> About</Link>
            <Link href='/lists'>Person list</Link>
        </nav>

    )
}

export default Navbar
