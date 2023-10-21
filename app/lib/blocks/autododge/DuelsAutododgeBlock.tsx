import { useBindingProps } from "routes/settings/utils"
import SettingsBlockGrid from "../../settings/SettingsBlockGrid";
import Toggle from "../../settings/controls/Toggle";
import {PremiumLabel} from "../../PremiumLabel";
import Checkbox from "../../settings/controls/Checkbox";
import Textarea from "../../settings/controls/Textarea";
import AutododgeTabs from "../../settings/AutododgeTabs";

const DuelsAutododgeBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <AutododgeTabs title="Duels" path="autododge.duels" tabs={[
            {
                heading: 'Options',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2">
                        <Toggle label="Dodge nicked players" path="autododge.duels.noStats"
                                {...bindingProps} />
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Toggle label={<>Requeue after dodging <PremiumLabel text={['PRO', '/PREMIUM']}/></>} path="autododge.duels.requeue"
                                {...bindingProps} />
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Toggle label={<>Do /p warp after dodging <PremiumLabel text={['PRO', '/PREMIUM']}/></>} path="autododge.duels.warpParty"
                                {...bindingProps} />
                    </div>
                </>)
            },
            {
                heading: 'Level',
                name: 'level',
                variable: 'level',
                lowest: 'Dodge an opponent when their level is lower than',
                highest: 'Dodge an opponent when their level is higher than',
                path: 'autododge.duels.level',
            },
            {
                heading: 'Wins',
                name: 'total wins number',
                variable: 'wins',
                lowest: 'Dodge an opponent when their total number of wins is lower than',
                highest: 'Dodge an opponent when their total number of wins is higher than',
                path: 'autododge.duels.wins',
            },
            {
                heading: 'Losses',
                name: 'total losses number',
                variable: 'losses',
                lowest: 'Dodge an opponent when their total number of losses is lower than',
                highest: 'Dodge an opponent when their total number of losses is higher than',
                path: 'autododge.duels.losses',
            },
            {
                heading: 'WLR',
                name: 'win/loss ratio',
                variable: 'wlr',
                lowest: 'Dodge an opponent when their win/loss ratio is lower than',
                highest: 'Dodge an opponent when their win/loss ratio is higher than',
                path: 'autododge.duels.wlr',
            },
            {
                heading: 'KDR',
                name: 'kill/death ratio',
                variable: 'kdr',
                lowest: 'Dodge an opponent when their kill/death ratio is lower than',
                highest: 'Dodge an opponent when their kill/death ratio is higher than',
                path: 'autododge.duels.kdr',
            },
            {
                heading: 'Melee',
                name: 'melee hit/swing ratio',
                variable: 'melee',
                lowest: 'Dodge an opponent when their melee hit/swing ratio is lower than',
                highest: 'Dodge an opponent when their melee hit/swing ratio is higher than',
                path: 'autododge.duels.melee',
            },
            {
                heading: 'Ranged',
                name: 'bow hit/shot ratio',
                variable: 'ranged',
                lowest: 'Dodge an opponent when their bow hit/shot ratio is lower than',
                highest: 'Dodge an opponent when their bow hit/shot ratio is higher than',
                path: 'autododge.duels.ranged',
            },
            {
                heading: 'WS',
                name: 'current winstreak',
                variable: 'ws',
                lowest: 'Dodge an opponent when their current winstreak is lower than',
                highest: 'Dodge an opponent when their current winstreak is higher than',
                path: 'autododge.duels.ws',
            },
            {
                heading: 'BWS',
                name: 'best winstreak',
                variable: 'bws',
                lowest: 'Dodge an opponent when their best winstreak is lower than',
                highest: 'Dodge an opponent when their best winstreak is higher than',
                path: 'autododge.duels.bws',
            },
            {
                heading: 'Players',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2 flex items-start">
                        <Checkbox htmlId="autododge-duels-players-blacklist-enabled"
                                  label={<span>Dodge all of the following players: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM', '/BOOSTERS']}/></span>}
                                  path="autododge.duels.players.blacklist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-duels-players-blacklist" label="" path="autododge.duels.players.blacklist.players" rows={3}
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 flex items-start">
                        <Checkbox htmlId="autododge-duels-players-whitelist-enabled"
                                  label={<span>Only queue against these players: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM', '/BOOSTERS']}/></span>}
                                  path="autododge.duels.players.whitelist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-duels-players-whitelist" label="" path="autododge.duels.players.whitelist.players" rows={3}
                                  {...bindingProps}/>
                    </div>
                </>)
            },
            {
                heading: 'Maps',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2 flex items-start">
                        <Checkbox htmlId="autododge-duels-maps-blacklist-enabled"
                                  label={<span>Dodge all of the following maps: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM']}/></span>}
                                  path="autododge.duels.mapsNew.blacklist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-duels-maps-blacklist" label="" path="autododge.duels.mapsNew.blacklist.maps" rows={3}
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 flex items-start">
                        <Checkbox htmlId="autododge-duels-maps-whitelist-enabled"
                                  label={<span>Only queue these maps: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM']}/></span>}
                                  path="autododge.duels.mapsNew.whitelist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-duels-maps-whitelist" label="" path="autododge.duels.mapsNew.whitelist.maps" rows={3}
                                  {...bindingProps}/>
                    </div>
                </>)
            },
        ]} bindingProps={bindingProps}/>
    )
}

export default DuelsAutododgeBlock