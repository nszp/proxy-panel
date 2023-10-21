import { ActionFunction, LoaderFunction } from '@remix-run/node'
import { sessionLoader } from '../../session.js'
import SettingsPage from '../../lib/settings/SettingsPage.js'
import { configAction, useBindingProps } from './utils.js'
import AutododgeTabs from '../../lib/settings/AutododgeTabs.js'
import Toggle from '../../lib/settings/controls/Toggle.js'
import Checkbox from '../../lib/settings/controls/Checkbox.js'
import Textarea from '../../lib/settings/controls/Textarea.js'
import { PremiumLabel } from '../../lib/PremiumLabel.js'
import DuelsAutododgeBlock from "../../lib/blocks/autododge/DuelsAutododgeBlock";
import BedwarsAutododgeBlock from "../../lib/blocks/autododge/BedwarsAutododgeBlock";
import SkywarsAutododgeBlock from "../../lib/blocks/autododge/SkywarsAutododgeBlock";
import WoolAutododgeBlock from "../../lib/blocks/autododge/WoolAutododgeBlock";

export const loader: LoaderFunction = sessionLoader

export const action: ActionFunction = configAction

export default function Autododge() {
    const bindingProps = useBindingProps()

    return (
        <>
            <SettingsPage name='Autododge'
                          link='/settings/autododge'
                          description={`Automatically dodge players in queue based on statistic conditions`}>
                <DuelsAutododgeBlock/>
                <BedwarsAutododgeBlock/>
                <SkywarsAutododgeBlock/>
                <WoolAutododgeBlock/>
            </SettingsPage>
        </>
    )
}