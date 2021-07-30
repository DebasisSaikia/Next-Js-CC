import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

const Layout = ({ children, checPublicKey }) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>Next-Shop</title>
                <link rel=" icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1 , shrink-to-fit=no" />
            </Head>

            <nav className="w-full h-20 bg-gray-200 flex items-center text-black">
                <ul className="flex justify-between  w-full">
                    <li className="ml-5">
                        <Link href='/'>
                            <a> Next-Shop</a>
                        </Link>
                    </li>
                    <li className="mr-5">
                        <Link href='/cart'>
                            <a >
                                Cart
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

            {children}

        </>
    )
}

export default Layout
