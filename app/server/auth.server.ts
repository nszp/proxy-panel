import { Authenticator } from 'remix-auth'
import { DiscordStrategy } from 'remix-auth-socials'
import { sessionStorage } from '../services/session.server'

// Create an instance of the authenticator
export let authenticator = new Authenticator(sessionStorage, { sessionKey: '_session' })
// You may specify a <User> type which the strategies will return (this will be stored in the session)
// export let authenticator = new Authenticator<User>(sessionStorage, { sessionKey: '_session' });

authenticator.use(
    new DiscordStrategy(
        {
            clientID: process.env.CLIENT_ID!!,
            clientSecret: process.env.CLIENT_SECRET!!,
            callbackURL: process.env.REDIRECT_URI!!,
            scope: ['identify'],
        },
        async ({ profile }) => {
            // here you would find or create a user in your database
            return profile
        }
    )
)
