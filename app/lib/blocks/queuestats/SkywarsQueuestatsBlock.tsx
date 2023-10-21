import { useBindingProps } from "routes/settings/utils"
import SettingsBlockFullGrid from '../../settings/SettingsBlockFullGrid'

import Toggle from "../../settings/controls/Toggle";
import Checkbox from "../../settings/controls/Checkbox";

const SkywarsQueuestatsBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockFullGrid title="Skywars" description="Skywars Queuestats">
            <div className='grid grid-cols-2 grid-rows-[repeat(3,_minmax(0,_1fr))] lg:grid-rows-2 grid-flow-col gap-y-2'>
                <div className='col-span-2 lg:col-span-1'>
                    <Toggle label='Show Skywars Stats in Tab' path='queuestats.gamemodes.skywars.enabled' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='skywars-space-after-skin' label='Space After Skin in Tab' path='queuestats.gamemodes.skywars.spaceBeforeStar' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 lg:row-start-2 flex items-center'>
                    <Checkbox htmlId='skywars-show-stats-ingame' label='Show Tabstats During Game' path='queuestats.gamemodes.skywars.showStatsIngame' {...bindingProps} />
                </div>
            </div>
        </SettingsBlockFullGrid>
    )
}

export default SkywarsQueuestatsBlock