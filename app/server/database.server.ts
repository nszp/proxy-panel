import defaultConfig, { ProxyConfig } from '@proxymod/config'
import { isEmpty, merge, mergeWith } from 'lodash'

export async function getUser(id: string): Promise<UserDocument | null> {
    try {
        const response: any = await (await fetch(process.env.LILITH_USER_URL!!.replace('USER_ID', id))).json()
        if (response.error === 'not found') {
            return null
        }
        return response as UserDocument
    } catch (e) {
        return null
    }

}

export async function getConfig(id: string): Promise<ProxyConfig & { id: string } | null> {
    try {
        const response: any = await (await fetch(process.env.LILITH_CONFIG_URL!!.replace('USER_ID', id))).json()
        if (response.error === 'not found') {
            return null
        }

        return mergeObjects(defaultConfig, response)
    } catch (e) {
        return null
    }
}

export async function patchConfig(id: string, body: any) {
    try {
        await (await fetch(process.env.LILITH_CONFIG_URL!!.replace('USER_ID', id), {
            body: JSON.stringify(body),
            method: 'PATCH'
        })).json()
        return
    } catch (e) {
        console.log(e)
        return
    }
}

export enum UserTier {
    DEVELOPER = 'DEVELOPER',
    STAFF = 'STAFF',
    TESTER = 'TESTER',
    PREMIUM = 'PREMIUM',
    TRIAL = 'TRIAL'
}

export type UserDocument = {
    id: string
    minecraft: string
    tier: UserTier,
    premium: Date,
    hardware_ids: Array<string>
}

function customizer(objValue: any, srcValue: any): any {
    if (isEmpty(srcValue)) {
        return srcValue
    } else {
        merge(objValue, srcValue)
    }
}

export default function mergeObjects(defaultObject: any, withReplacements: any): any {
    return mergeWith(defaultObject, withReplacements, customizer)
}
