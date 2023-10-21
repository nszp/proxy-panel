import { ActionFunction, LoaderFunction } from '@remix-run/node'
import { sessionLoader } from '../../session.js'
import { configAction, useBindingProps } from './utils.js'
import SettingsPage from '../../lib/settings/SettingsPage.js'
import AutoGGBlock from '../../lib/blocks/autogg/AutoGGBlock'

export const loader: LoaderFunction = sessionLoader

export const action: ActionFunction = configAction

export default function AutoGG() {
    const bindingProps = useBindingProps()

    return (
        <>
            <SettingsPage name='AutoGG'
                          link='/settings/autogg'
                          description={`Add chat macros for the end of a game`}>
                <AutoGGBlock/>
            </SettingsPage>
        </>
    )
}
