import { getConfig, getUser, UserDocument } from './server/database.server.js'
import { DiscordProfile } from 'remix-auth-socials'
import { authenticator } from './server/auth.server.js'
import { ProxyConfig } from '@proxymod/config'
import { json, LoaderFunction, redirect } from '@remix-run/node'

export type ProxySession = { user: UserDocument, discord: DiscordProfile, config?: ProxyConfig & { id: string } }
export type ProxyConfigSession = { user: UserDocument, discord: DiscordProfile, config: ProxyConfig & { id: string } }

export async function getSession(request: Request, addConfig: boolean = true): Promise<ProxySession | ProxyConfigSession | null> {
    const discord: DiscordProfile = await authenticator.isAuthenticated(request, {
        failureRedirect: '/auth/discord',
    }) as DiscordProfile

    const user = await getUser(discord.__json.id)
    if (user == null) return null

    if (addConfig) {
        const config = await getConfig(discord.__json.id)
        if (config == null) return null

        return {user, discord, config}
    } else {
        return {user, discord}
    }


}

export const sessionLoader: LoaderFunction = async ({request}) => {
    let session = await getSession(request)
    if (session === null) return redirect('/auth/logout')
    return json(session)
}