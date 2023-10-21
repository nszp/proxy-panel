import {useBindingProps} from "../../../routes/settings/utils";
import SettingsBlockGrid from "../../settings/SettingsBlockGrid";
import Toggle from "../../settings/controls/Toggle";
import StackedInput from "../../settings/controls/StackedInput";

const ProxyBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockGrid title='Proxy Options' description='Technical settings concerning the proxy'>
            <div className='col-span-4 sm:col-span-2'>
                <Toggle label='Log Chat Messages' path='general.proxy.logChatMessages' {...bindingProps} />
            </div>
            <div className='col-span-2 mt-4'>
                <StackedInput htmlIdOne='remote-ip' labelOne='Remote Server IP' pathOne='general.proxy.remoteIp'
                              htmlIdTwo='remote-port' labelTwo='Remote Server Port' pathTwo='general.proxy.remotePort'
                              typeTwo='number' {...bindingProps} />
            </div>
            <div className='col-span-2 mt-4'>
                <StackedInput htmlIdOne='local-ip'
                              labelOne="Local Server IP (ONLY MODIFY IF YOU KNOW WHAT YOU'RE DOING)"
                              pathOne='general.proxy.localIp' htmlIdTwo='local-port' labelTwo='Local Server Port'
                              pathTwo='general.proxy.localPort' typeTwo='number' {...bindingProps} />
            </div>
        </SettingsBlockGrid>
    )
}

export default ProxyBlock