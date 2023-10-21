import { ActionFunction, LoaderFunction } from '@remix-run/node'
import { authenticator } from '../../server/auth.server'

export let loader: LoaderFunction = async ({request}) => {
    await authenticator.logout(request, {redirectTo: '/auth/discord'})
}

export let action: ActionFunction = async ({request}) => {
    await authenticator.logout(request, {redirectTo: '/auth/discord'})
}