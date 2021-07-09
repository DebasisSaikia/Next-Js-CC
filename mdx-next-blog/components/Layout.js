import Link from 'next/link'

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}

export default Layout
