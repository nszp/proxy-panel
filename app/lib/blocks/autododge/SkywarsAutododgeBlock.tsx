import { useBindingProps } from "routes/settings/utils"
import SettingsBlockGrid from "../../settings/SettingsBlockGrid";
import Toggle from "../../settings/controls/Toggle";
import {PremiumLabel} from "../../PremiumLabel";
import Checkbox from "../../settings/controls/Checkbox";
import Textarea from "../../settings/controls/Textarea";
import AutododgeTabs from "../../settings/AutododgeTabs";

const SkywarsAutododgeBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <AutododgeTabs title="Skywars" path="autododge.skywars" tabs={[
            {
                heading: 'Options',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2">
                        <Toggle label="Dodge nicked players" path="autododge.skywars.noStats"
                                {...bindingProps} />
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Toggle label={<>Requeue after dodging <PremiumLabel text={['PRO', '/PREMIUM']}/></>} path="autododge.skywars.requeue"
                                {...bindingProps} />
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Toggle label={<>Do /p warp after dodging <PremiumLabel text={['PRO', '/PREMIUM']}/></>} path="autododge.skywars.warpParty"
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
                path: 'autododge.skywars.level',
            },
            {
                heading: 'Star',
                name: 'star',
                variable: 'star',
                lowest: 'Dodge an opponent when their star level is lower than',
                highest: 'Dodge an opponent when their star level is higher than',
                path: 'autododge.skywars.star',
            },
            {
                heading: 'Wins',
                name: 'total wins number',
                variable: 'wins',
                lowest: 'Dodge an opponent when their total number of wins is lower than',
                highest: 'Dodge an opponent when their total number of wins is higher than',
                path: 'autododge.skywars.wins',
            },
            {
                heading: 'Losses',
                name: 'total losses number',
                variable: 'losses',
                lowest: 'Dodge an opponent when their total number of losses is lower than',
                highest: 'Dodge an opponent when their total number of losses is higher than',
                path: 'autododge.skywars.losses',
            },
            {
                heading: 'WLR',
                name: 'win/loss ratio',
                variable: 'wlr',
                lowest: 'Dodge an opponent when their win/loss ratio is lower than',
                highest: 'Dodge an opponent when their win/loss ratio is higher than',
                path: 'autododge.skywars.wlr',
            },
            {
                heading: 'KDR',
                name: 'kill/death ratio',
                variable: 'kdr',
                lowest: 'Dodge an opponent when their kill/death ratio is lower than',
                highest: 'Dodge an opponent when their kill/death ratio is higher than',
                path: 'autododge.skywars.kdr',
            },
            {
                heading: 'WS',
                name: 'current winstreak',
                variable: 'ws',
                lowest: 'Dodge an opponent when their current winstreak is lower than',
                highest: 'Dodge an opponent when their current winstreak is higher than',
                path: 'autododge.skywars.ws',
            },
            {
                heading: 'BWS',
                name: 'best winstreak',
                variable: 'bws',
                lowest: 'Dodge an opponent when their best winstreak is lower than',
                highest: 'Dodge an opponent when their best winstreak is higher than',
                path: 'autododge.skywars.bws',
            },
            {
                heading: 'Players',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2 flex items-start">
                        <Checkbox htmlId="autododge-skywars-players-blacklist-enabled"
                                  label={<span>Dodge all of the following players: (comma seperated list) <span className="text-proxy font-bold">PREMIUM/BOOSTERS ONLY</span></span>}
                                  path="autododge.skywars.players.blacklist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-skywars-players-blacklist" label="" path="autododge.skywars.players.blacklist.players" rows={3}
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 flex items-start">
                        <Checkbox htmlId="autododge-skywars-players-whitelist-enabled"
                                  label={<span>Dodge everyone except for the following players: (comma seperated list) <span className="text-proxy font-bold">PREMIUM/BOOSTERS ONLY</span></span>}
                                  path="autododge.skywars.players.whitelist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-skywars-players-whitelist" label="" path="autododge.skywars.players.whitelist.players" rows={3}
                                  {...bindingProps}/>
                    </div>
                </>)
            },
            {
                heading: 'Maps',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2 flex items-start">
                        <Checkbox htmlId="autododge-skywars-maps-blacklist-enabled"
                                  label={<span>Dodge all of the following maps: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM']}/></span>}
                                  path="autododge.skywars.mapsNew.blacklist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-skywars-maps-blacklist" label="" path="autododge.skywars.mapsNew.blacklist.maps" rows={3}
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 flex items-start">
                        <Checkbox htmlId="autododge-skywars-maps-whitelist-enabled"
                                  label={<span>Only queue these maps: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM']}/></span>}
                                  path="autododge.skywars.mapsNew.whitelist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-skywars-maps-whitelist" label="" path="autododge.skywars.mapsNew.whitelist.maps" rows={3}
                                  {...bindingProps}/>
                    </div>
                </>)
            },
        ]} bindingProps={bindingProps}/>
    )
}

export default SkywarsAutododgeBlock