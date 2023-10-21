import {useBindingProps} from "../../../routes/settings/utils";
import SettingsBlockGrid from "../../settings/SettingsBlockGrid";
import Toggle from "../../settings/controls/Toggle";
import {PremiumLabel} from "../../PremiumLabel";
import Checkbox from "../../settings/controls/Checkbox";
import SettingsBlockFullGrid from '../../settings/SettingsBlockFullGrid'

const RankVisibilityBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockFullGrid title='Custom Ranks' description={<>Disable Proxy's ingame custom ranks<br/>Only with<PremiumLabel text={['LILITH PRO']}/></>}>
            <div className='col-span-4 sm:col-span-2'>
                <Toggle label={(<>Show Proxy Custom Ranks</>)} path='general.ranks.enabled' {...bindingProps} />
            </div>
            <div className='grid grid-cols-2 grid-rows-[repeat(11,_minmax(0,_1fr))] lg:grid-rows-6 gap-y-2 lg:gap-y-4'>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='custom-ranks-statchecking' label='Show when checking stats' path='general.ranks.statChecking' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center mt-2 lg:mt-0'>
                    <Checkbox htmlId='custom-ranks-general-chat' label='Show in chat messages' path='general.ranks.generalChat' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='custom-ranks-direct-messages' label='Show in direct messages' path='general.ranks.directMessages' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='custom-ranks-party-chat' label='Show in party chat messages' path='general.ranks.partyChat' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='custom-ranks-guild-chat' label='Show in guild chat messages' path='general.ranks.guildChat' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center mt-2 lg:mt-0'>
                    <Checkbox htmlId='custom-ranks-friend-join' label='Show in friend join messages' path='general.ranks.friendJoin' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='custom-ranks-guild-join' label='Show in guild join messages' path='general.ranks.guildJoin' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='custom-ranks-lobby-join' label='Show in lobby join messages' path='general.ranks.lobbyJoin' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center mt-2 lg:mt-0'>
                    <Checkbox htmlId='custom-ranks-friends-list' label='Show in friends list' path='general.ranks.friendsList' {...bindingProps} />
                </div>
                {/*<div className='col-span-4 sm:col-span-2 mt-4 flex items-start'>*/}
                {/*    <Checkbox htmlId='custom-ranks-party-list' label='Show in party list' path='general.ranks.partyList' {...bindingProps} />*/}
                {/*</div>*/}
                {/*<div className='col-span-4 sm:col-span-2 mt-4 flex items-start'>*/}
                {/*    <Checkbox htmlId='custom-ranks-guild-list' label='Show in guild list' path='general.ranks.guildList' {...bindingProps} />*/}
                {/*</div>*/}
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='custom-ranks-lobby-tablist' label='Show in lobby tablist' path='general.ranks.lobbyTablist' {...bindingProps} />
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <Checkbox htmlId='custom-ranks-lobby-leaderboards' label='Show on lobby leaderboards' path='general.ranks.lobbyLeaderboards' {...bindingProps} />
                </div>
                {/*<div className='col-span-4 sm:col-span-2 mt-4 flex items-start'>*/}
                {/*    <Checkbox htmlId='custom-ranks-game-end' label='Show at game end' path='general.ranks.gameEnd' {...bindingProps} />*/}
                {/*</div>*/}
            </div>
        </SettingsBlockFullGrid>
    )
}

export default RankVisibilityBlock