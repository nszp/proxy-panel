import { useBindingProps } from "routes/settings/utils"
import SettingsBlockGrid from "../../settings/SettingsBlockGrid";
import Toggle from "../../settings/controls/Toggle";
import {PremiumLabel} from "../../PremiumLabel";
import Checkbox from "../../settings/controls/Checkbox";
import Textarea from "../../settings/controls/Textarea";
import AutododgeTabs from "../../settings/AutododgeTabs";

const WoolAutododgeBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <AutododgeTabs title="Wool Wars" path="autododge.wool" tabs={[
            {
                heading: 'Options',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2">
                        <Toggle label="Dodge nicked players" path="autododge.wool.noStats"
                                {...bindingProps} />
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Toggle label={<>Requeue after dodging <PremiumLabel text={['PRO', '/PREMIUM']}/></>} path="autododge.wool.requeue"
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
                path: 'autododge.wool.level',
            },
            {
                heading: 'Star',
                name: 'star',
                variable: 'star',
                lowest: 'Dodge an opponent when their star level is lower than',
                highest: 'Dodge an opponent when their star level is higher than',
                path: 'autododge.wool.star',
            },
            {
                heading: 'Wins',
                name: 'total wins number',
                variable: 'wins',
                lowest: 'Dodge an opponent when their total number of wins is lower than',
                highest: 'Dodge an opponent when their total number of wins is higher than',
                path: 'autododge.wool.wins',
            },
            {
                heading: 'Losses',
                name: 'total losses number',
                variable: 'losses',
                lowest: 'Dodge an opponent when their total number of losses is lower than',
                highest: 'Dodge an opponent when their total number of losses is higher than',
                path: 'autododge.wool.losses',
            },
            {
                heading: 'WLR',
                name: 'win/loss ratio',
                variable: 'wlr',
                lowest: 'Dodge an opponent when their win/loss ratio is lower than',
                highest: 'Dodge an opponent when their win/loss ratio is higher than',
                path: 'autododge.wool.wlr',
            },
            {
                heading: 'KDR',
                name: 'kill/death ratio',
                variable: 'kdr',
                lowest: 'Dodge an opponent when their kill/death ratio is lower than',
                highest: 'Dodge an opponent when their kill/death ratio is higher than',
                path: 'autododge.wool.kdr',
            },
            {
                heading: 'Games',
                name: 'total games played number',
                variable: 'games',
                lowest: 'Dodge an opponent when their total number of games played is lower than',
                highest: 'Dodge an opponent when their total number of games played is higher than',
                path: 'autododge.wool.games',
            },
            {
                heading: 'Assists',
                name: 'total assists number',
                variable: 'assists',
                lowest: 'Dodge an opponent when their total number of assists is lower than',
                highest: 'Dodge an opponent when their total number of assists is higher than',
                path: 'autododge.wool.assists',
            },
            {
                heading: 'Players',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2 flex items-start">
                        <Checkbox htmlId="autododge-wool-players-blacklist-enabled"
                                  label={<span>Dodge all of the following players: (comma seperated list) <span className="text-proxy font-bold">PREMIUM/BOOSTERS ONLY</span></span>}
                                  path="autododge.wool.players.blacklist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-wool-players-blacklist" label="" path="autododge.wool.players.blacklist.players" rows={3}
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 flex items-start">
                        <Checkbox htmlId="autododge-wool-players-whitelist-enabled"
                                  label={<span>Dodge everyone except for the following players: (comma seperated list) <span className="text-proxy font-bold">PREMIUM/BOOSTERS ONLY</span></span>}
                                  path="autododge.wool.players.whitelist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-wool-players-whitelist" label="" path="autododge.wool.players.whitelist.players" rows={3}
                                  {...bindingProps}/>
                    </div>
                </>)
            },
            {
                heading: 'Maps',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2 flex items-start">
                        <Checkbox htmlId="autododge-wool-maps-blacklist-enabled"
                                  label={<span>Dodge all of the following maps: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM']}/></span>}
                                  path="autododge.wool.mapsNew.blacklist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-wool-maps-blacklist" label="" path="autododge.wool.mapsNew.blacklist.maps" rows={3}
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 flex items-start">
                        <Checkbox htmlId="autododge-wool-maps-whitelist-enabled"
                                  label={<span>Only queue these maps: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM']}/></span>}
                                  path="autododge.wool.mapsNew.whitelist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-wool-maps-whitelist" label="" path="autododge.wool.mapsNew.whitelist.maps" rows={3}
                                  {...bindingProps}/>
                    </div>
                </>)
            },
        ]} bindingProps={bindingProps}/>
    )
}

export default WoolAutododgeBlock