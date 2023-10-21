import { useBindingProps } from "routes/settings/utils"
import SettingsBlockFullGrid from '../../settings/SettingsBlockFullGrid'

import Toggle from "../../settings/controls/Toggle";
import Checkbox from "../../settings/controls/Checkbox";
import InformationTooltip from '../../InformationTooltip'

const DuelsQueuestatsBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockFullGrid title="Duels" description="Duels Queuestats">
            <div className="grid grid-cols-2 grid-rows-[repeat(5,_minmax(0,_1fr))] lg:grid-rows-3 grid-flow-col gap-y-2">
                <div className='col-span-2 lg:col-span-1'>
                    <Toggle label='Show Duels Stats in Chat' path='queuestats.gamemodes.duels.enabled' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='duels-overall-stats' label='Overall Stats' path='queuestats.gamemodes.duels.overall' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='duels-overall-mode-stats' label={<span>Overall Mode Stats
                        <InformationTooltip content={<span>When enabled, this will show <b>Overall Bridge</b> stats instead of <b>Bridge Doubles</b> stats and so forth.</span>}/></span>} path='queuestats.gamemodes.duels.modesOverall' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 lg:row-start-2 flex items-center'>
                    <Checkbox htmlId='duels-show-own-stats' label='Show Your Own Stats' path='queuestats.gamemodes.duels.showOwnStats' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='duels-show-party-stats' label='Show Party Member Stats' path='queuestats.gamemodes.duels.showPartyStats' {...bindingProps} />
                </div>
            </div>
        </SettingsBlockFullGrid>
    )
}

export default DuelsQueuestatsBlock