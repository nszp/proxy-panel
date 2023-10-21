import Toggle from '../../lib/settings/controls/Toggle.js'
import { ActionFunction, LoaderFunction } from '@remix-run/node'
import { sessionLoader } from '../../session.js'
import SettingsPage from '../../lib/settings/SettingsPage.js'
import SettingsBlock from '../../lib/settings/SettingsBlock.js'
import SettingsTabs from '../../lib/settings/SettingsTabs.js'
import { configAction, useBindingProps } from './utils.js'
import Checkbox from '../../lib/settings/controls/Checkbox.js'
import DuelsQueuestatsBlock from "../../lib/blocks/queuestats/DuelsQueuestatsBlock";
import WoolQueuestatsBlock from '../../lib/blocks/queuestats/WoolQueuestatsBlock.js'
import BedwarsQueuestatsBlock from '../../lib/blocks/queuestats/BedwarsQueuestatsBlock.js'
import SkywarsQueuestatsBlock from "../../lib/blocks/queuestats/SkywarsQueuestatsBlock";

export const loader: LoaderFunction = sessionLoader

export const action: ActionFunction = configAction

export default function Queuestats() {
    const bindingProps = useBindingProps()
    return (
        <>
            <SettingsPage name='Queuestats'
                          link='/settings/queuestats'
                          description={`Configure stats shown before and during Hypixel games`}>
                <DuelsQueuestatsBlock/>
                <BedwarsQueuestatsBlock/>
                <SkywarsQueuestatsBlock/>
                <WoolQueuestatsBlock/>
            </SettingsPage>
        </>
    )
}