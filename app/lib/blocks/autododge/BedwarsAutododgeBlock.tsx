import { useBindingProps } from "routes/settings/utils"
import SettingsBlockGrid from "../../settings/SettingsBlockGrid";
import Toggle from "../../settings/controls/Toggle";
import {PremiumLabel} from "../../PremiumLabel";
import Checkbox from "../../settings/controls/Checkbox";
import Textarea from "../../settings/controls/Textarea";
import AutododgeTabs from "../../settings/AutododgeTabs";

const BedwarsAutododgeBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <AutododgeTabs title="Bedwars" path="autododge.bedwars" tabs={[
            {
                heading: 'Options',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2">
                        <Toggle label="Dodge nicked players" path="autododge.bedwars.noStats"
                                {...bindingProps} />
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Toggle label={<>Requeue after dodging <PremiumLabel text={['PRO', '/PREMIUM']}/></>} path="autododge.bedwars.requeue"
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
                path: 'autododge.bedwars.level',
            },
            {
                heading: 'Star',
                name: 'star',
                variable: 'star',
                lowest: 'Dodge an opponent when their star level is lower than',
                highest: 'Dodge an opponent when their star level is higher than',
                path: 'autododge.bedwars.star',
            },
            {
                heading: 'FKDR',
                name: 'final kill/death ratio',
                variable: 'fkdr',
                lowest: 'Dodge an opponent when their final kill/death ratio is lower than',
                highest: 'Dodge an opponent when their final kill/death ratio is higher than',
                path: 'autododge.bedwars.fkdr',
            },
            {
                heading: 'Wins',
                name: 'total wins number',
                variable: 'wins',
                lowest: 'Dodge an opponent when their total number of wins is lower than',
                highest: 'Dodge an opponent when their total number of wins is higher than',
                path: 'autododge.bedwars.wins',
            },
            {
                heading: 'Losses',
                name: 'total losses number',
                variable: 'losses',
                lowest: 'Dodge an opponent when their total number of losses is lower than',
                highest: 'Dodge an opponent when their total number of losses is higher than',
                path: 'autododge.bedwars.losses',
            },
            {
                heading: 'WLR',
                name: 'win/loss ratio',
                variable: 'wlr',
                lowest: 'Dodge an opponent when their win/loss ratio is lower than',
                highest: 'Dodge an opponent when their win/loss ratio is higher than',
                path: 'autododge.bedwars.wlr',
            },
            {
                heading: 'WS',
                name: 'current winstreak',
                variable: 'ws',
                lowest: 'Dodge an opponent when their current winstreak is lower than',
                highest: 'Dodge an opponent when their current winstreak is higher than',
                path: 'autododge.bedwars.ws',
            },
            {
                heading: 'Players',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2 flex items-start">
                        <Checkbox htmlId="autododge-bedwars-players-blacklist-enabled"
                                  label={<span>Dodge all of the following players: (comma seperated list) <span className="text-proxy font-bold">PREMIUM/BOOSTERS ONLY</span></span>}
                                  path="autododge.bedwars.players.blacklist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-bedwars-players-blacklist" label="" path="autododge.bedwars.players.blacklist.players" rows={3}
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 flex items-start">
                        <Checkbox htmlId="autododge-bedwars-players-whitelist-enabled"
                                  label={<span>Dodge everyone except for the following players: (comma seperated list) <span className="text-proxy font-bold">PREMIUM/BOOSTERS ONLY</span></span>}
                                  path="autododge.bedwars.players.whitelist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-bedwars-players-whitelist" label="" path="autododge.bedwars.players.whitelist.players" rows={3}
                                  {...bindingProps}/>
                    </div>
                </>)
            },
            {
                heading: 'Maps',
                content: (<>
                    <div className="col-span-4 sm:col-span-2 mt-2 flex items-start">
                        <Checkbox htmlId="autododge-bedwars-maps-blacklist-enabled"
                                  label={<span>Dodge all of the following maps: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM']}/></span>}
                                  path="autododge.bedwars.mapsNew.blacklist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-bedwars-maps-blacklist" label="" path="autododge.bedwars.mapsNew.blacklist.maps" rows={3}
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 flex items-start">
                        <Checkbox htmlId="autododge-bedwars-maps-whitelist-enabled"
                                  label={<span>Only queue these maps: (comma seperated list) <PremiumLabel text={['PRO', '/PREMIUM']}/></span>}
                                  path="autododge.bedwars.mapsNew.whitelist.enabled"
                                  {...bindingProps}/>
                    </div>
                    <div className="col-span-4 sm:col-span-2 -mt-4">
                        <Textarea htmlId="autododge-bedwars-maps-whitelist" label="" path="autododge.bedwars.mapsNew.whitelist.maps" rows={3}
                                  {...bindingProps}/>
                    </div>
                </>)
            },
        ]} bindingProps={bindingProps}/>
    )
}

export default BedwarsAutododgeBlock