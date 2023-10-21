import { ChangeEvent } from 'react'
import { ProxyConfig } from '@proxymod/config'
import { useFetcher, useFetchers, useLoaderData } from '@remix-run/react'
import { DiscordProfile } from 'remix-auth-socials'
import { authenticator } from '../../server/auth.server.js'
import { patchConfig } from '../../server/database.server.js'
import { ProxyConfigSession } from '../../session.js'
import { ActionFunction } from '@remix-run/node'

export const useBindingProps = (): { fetcher: any, getValue: (path: ConfigPath, value: any) => any, config: ProxyConfig & { id: string } } => {
    const {config} = useLoaderData<ProxyConfigSession>()
    const fetcher = useFetcher()
    const fetchers = useFetchers()

    const getValue = (path: ConfigPath, value: any) => {
        for (const f of fetchers) {
            if (f.formData?.get('path') === path) {
                const val: any = f.formData.get('value')
                if (val === 'true') {
                    return true
                } else if (val === 'false') {
                    return false
                }
                return val
            }
        }
        return value
    }

    return {
        fetcher, getValue, config
    }
}

export const configAction: ActionFunction = async ({request}) => {
    const discord: DiscordProfile = await authenticator.isAuthenticated(request, {
        failureRedirect: '/auth/discord',
    }) as DiscordProfile
    const reqBody = await request.formData()
    const body: any = {}
    let value: any = reqBody.get('value')
    if (value === 'true') {
        value = true
    } else if (value === 'false') {
        value = false
    }
    body[reqBody.get('path') as string] = value
    await patchConfig(discord.id, body)
    return null
}

export const changeBuilder: (path: ConfigPath, fetcher: any) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void = (path, fetcher) => {
    return (e) => {
        // @ts-ignore
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        patchValue(path, value, fetcher)
    }
}

export const patchValue = (path: ConfigPath, value: any, fetcher: any) => {
    if (validate(path, value)) {
        // if (typeof value === 'string' && value.endsWith('.')) value += '0'
        console.log(process(path, value))
        fetcher.submit({path, value: process(path, value)}, {
            method: 'post'
        })
    }

}

// const apiKeyRegex = /^\W*[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\W*$/

const validators: Partial<Record<ConfigPath, (value: any) => boolean>> = {
}

const defaultValidator = (_value: any) => {
    return true
}
export const validate = (path: ConfigPath, value: any): boolean => {
    return (validators[path] ?? defaultValidator)(value)
}

const processors: Partial<Record<ConfigPath, (value: any) => any>> = {
    'general.apiKey': (value: string) => {
        return value.trim()
    },
    'general.proxy.localIp': (value: string) => {
        return value.trim()
    },
    'general.proxy.localPort': (value: string) => {
        return isNaN(parseInt(value.slice(0,5))) ? 0 : parseInt(value.slice(0,5))
    },
    'general.proxy.remoteIp': (value: string) => {
        return value.trim()
    },
    'general.proxy.remotePort': (value: string) => {
        return isNaN(parseInt(value.slice(0,5))) ? 0 : parseInt(value.slice(0,5))
    },
    'autododge.duels.level.lowest': (value: string) => {
        // if (value.endsWith('.')) value += '0'
        return value
    }
}

const defaultProcessor = (value: any) => {
    return value
}
export const process = (path: ConfigPath, value: any): any => {
    if (path.includes('autododge') && !path.includes('Enabled') && (path.includes('lowest') || path.includes('highest') )) {
        return processors['autododge.duels.level.lowest']!!(value)
    }
    return (processors[path] ?? defaultProcessor)(value)
}

export type ConfigPath = Path<ProxyConfig>
export type Path<T> = PathImpl<T, keyof T> | keyof T;

type PathImpl<T, K extends keyof T> =
    K extends string
        ? T[K] extends Record<string, any>
            ? T[K] extends ArrayLike<any>
                ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
                : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
            : K
        : never;


type PathValue<T, P extends Path<T>> =
    P extends `${infer K}.${infer Rest}`
        ? K extends keyof T
            ? Rest extends Path<T[K]>
                ? PathValue<T[K], Rest>
                : never
            : never
        : P extends keyof T
            ? T[P]
            : never;

