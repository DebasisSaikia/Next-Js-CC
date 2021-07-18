import Link from 'next/link'

const Layout = ({ children }) => {
    return (
        <div className="mx-auto ">
            <header>
                <h1 className="text-center text-5xl font-bold">MDX BLOG</h1>
                <nav>
                    <ul className="flex space-x-4 justify-center mt-5 text-red-500 text-2xl">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {children}
        </div>
    )
}

export default Layout
