import { LoaderFunction } from '@remix-run/node'
import { authenticator } from '../../server/auth.server'

export let loader: LoaderFunction = async ({request}) => {
    return authenticator.authenticate('discord', request, {
        successRedirect: '/settings/general'
    })
}