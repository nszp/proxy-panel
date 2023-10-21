import { useBindingProps } from 'routes/settings/utils'
import SettingsBlockFullGrid from '../../settings/SettingsBlockFullGrid'
import Toggle from '../../settings/controls/Toggle'
import Checkbox from '../../settings/controls/Checkbox'

const WoolQueuestatsBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockFullGrid title="Wool Wars" description="Wool Wars Queuestats">
            <div className="grid grid-cols-2 grid-rows-[repeat(8,_minmax(0,_1fr))] lg:grid-rows-4 grid-flow-col gap-y-2">
                <div className="col-span-2 lg:col-span-1">
                    <Toggle label="Show Wool Wars Stats in Tab" path="queuestats.gamemodes.wool.enabled" {...bindingProps} />
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center">
                    <Checkbox htmlId="wool-space-after-skin" label="Space After Skin in Tab" path="queuestats.gamemodes.wool.spaceBeforeStar" {...bindingProps} />
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center">
                    <Checkbox htmlId="wool-show-stats-ingame" label="Show Tabstats During Game" path="queuestats.gamemodes.wool.showStatsIngame" {...bindingProps} />
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center">
                    <Checkbox htmlId="wool-auto-who" label="Auto Who For External Overlays" path="queuestats.gamemodes.wool.autoWho" {...bindingProps} />
                </div>
                <div className="col-span-2 lg:col-span-1 lg:col-start-2">
                    <Toggle label="Show Wool Wars Stats in Chat" path="queuestats.gamemodes.wool.chatEnabled" {...bindingProps} />
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center">
                    <Checkbox htmlId="wool-show-own-stats" label="Show Your Own Stats" path="queuestats.gamemodes.wool.showOwnStats" {...bindingProps} />
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center">
                    <Checkbox htmlId="wool-show-party-stats" label="Show Party Member Stats" path="queuestats.gamemodes.wool.showPartyStats" {...bindingProps} />
                </div>

            </div>
        </SettingsBlockFullGrid>
    )
}

export default WoolQueuestatsBlock