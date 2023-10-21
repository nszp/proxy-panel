import { ActionFunction, LoaderFunction } from '@remix-run/node'
import { sessionLoader } from '../../session.js'
import SettingsPage from '../../lib/settings/SettingsPage.js'
import SettingsBlockGrid from '../../lib/settings/SettingsBlockGrid.js'
import TextInput from '../../lib/settings/controls/TextInput.js'
import Toggle from '../../lib/settings/controls/Toggle.js'
import Checkbox from '../../lib/settings/controls/Checkbox.js'
import { configAction, useBindingProps } from './utils.js'
import StackedInput from '../../lib/settings/controls/StackedInput.js'
import { PremiumLabel } from '../../lib/PremiumLabel.js'
import ApiKeyBlock from "../../lib/blocks/general/ApiKeyBlock";
import RankVisibilityBlock from "../../lib/blocks/general/RankVisibilityBlock";
import ProxyBlock from '../../lib/blocks/general/ProxyBlock.js'

export const loader: LoaderFunction = sessionLoader

export const action: ActionFunction = configAction

export default function General() {
    // const bindingProps = useBindingProps()

    return (
        <SettingsPage name='General'
                      link='/settings/general'
                      description={`Configure Proxy's most important settings and miscellaneous options that don't fit into other categories.`}>
            <ApiKeyBlock/>
            <ProxyBlock/>
            <RankVisibilityBlock/>
        </SettingsPage>
    )
}
