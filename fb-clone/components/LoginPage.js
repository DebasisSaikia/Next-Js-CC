import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/client'
signIn

const LoginPage = () => {
    return (
        <div className="grid place-items-center pt-5">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                height={300} width={300} alt="login logo" objectFit="contain" />
            <h1 className="p-5 bg-blue-500 rounded-full text-white font-bold text-center mt-4 cursor-pointer" onClick={signIn}>Login in Facebook</h1>
        </div>
    )
}

export default LoginPage
