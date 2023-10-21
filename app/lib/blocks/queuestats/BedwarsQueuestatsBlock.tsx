import {useBindingProps} from "routes/settings/utils"
import Toggle from "../../settings/controls/Toggle";
import Checkbox from "../../settings/controls/Checkbox";
import SettingsBlockFullGrid from '../../settings/SettingsBlockFullGrid'

const BedwarsQueuestatsBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockFullGrid title="Bedwars" description="Bedwars Queuestats">
            <div className='grid grid-cols-2 grid-rows-[repeat(8,_minmax(0,_1fr))] lg:grid-rows-4 grid-flow-col gap-y-2'>

                <div className='col-span-2 lg:col-span-1'> {/* 1 */}
                    <Toggle label='Show Bedwars Stats in Tab'
                            path='queuestats.gamemodes.bedwars.enabled' {...bindingProps} />
                </div>

                <div className='col-span-2 lg:col-span-1 flex items-center'> {/* 1 */}
                    <Checkbox htmlId='bedwars-space-after-skin' label='Space After Skin in Tab'
                              path='queuestats.gamemodes.bedwars.spaceBeforeStar' {...bindingProps} />
                </div>

                <div className='col-span-2 lg:col-span-1 flex items-center'> {/* 1 */}
                    <Checkbox htmlId='bedwars-show-stats-ingame' label='Show Tabstats During Game'
                              path='queuestats.gamemodes.bedwars.showStatsIngame' {...bindingProps} />
                </div>

                <div className='col-span-2 lg:col-span-1 flex items-center'> {/* 1 description='For use with an external overlay' */}
                    <Checkbox htmlId='bedwars-auto-who' label='Auto Who For External Overlays'
                              path='queuestats.gamemodes.bedwars.autoWho' {...bindingProps} />
                </div>

                <div className='col-span-2 lg:col-start-2 lg:col-span-1'> {/* 2 */}
                    <Toggle label='Show Bedwars Stats in Chat'
                            path='queuestats.gamemodes.bedwars.chatEnabled' {...bindingProps} />
                </div>

                <div className='col-span-2 lg:col-span-1 flex items-center'> {/* 2 description='Applies to stats in chat only'*/}
                    <Checkbox htmlId='bedwars-overall-stats' label='Overall Stats in Chat'
                              path='queuestats.gamemodes.bedwars.overall' {...bindingProps} />
                </div>

                <div className='col-span-2 lg:col-span-1 flex items-center'> {/* 2 */}
                    <Checkbox htmlId='bedwars-show-own-stats' label='Show Your Own Stats in Chat'
                              path='queuestats.gamemodes.bedwars.showOwnStats' {...bindingProps} />
                </div>

                <div className='col-span-2 lg:col-span-1 flex items-center'> {/* 2 */}
                    <Checkbox htmlId='bedwars-show-party-stats' label='Show Party Member Stats in Chat'
                              path='queuestats.gamemodes.bedwars.showPartyStats' {...bindingProps} />
                </div>

            </div>
        </SettingsBlockFullGrid>
    )
}

export default BedwarsQueuestatsBlock