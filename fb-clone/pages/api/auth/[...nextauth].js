import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Facebook({
            clientId: process.env.NEXT_APP_FB_CLIENT,
            clientSecret: process.env.NEXT_APP_SECRET
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a databas
})