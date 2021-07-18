import React from 'react'
import { getSession, providers, signIn, csrfToken } from 'next-auth/client'

export default function SignIn({ providers, csrfToken }) {


    return (
        <div className="w-full max-w-xs mx-auto flex items-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="username">
                        Custom Signin Form
                    </label>
                    {Object.values(providers).map((provider) => {
                        if (provider.name === 'Email') {
                            return;
                        }

                        return (
                            <div key={provider.name}>
                                <p className="cursor-pointer" onClick={() => signIn(provider.id)}> SignIn with {provider.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

SignIn.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req })

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: '/',
        });
        res.end()
        return;
    }
    return {
        session: undefined,
        providers: await providers(context),
        csrfToken: await csrfToken(context)  //for email sign in
    }
}


