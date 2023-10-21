import {useBindingProps} from "../../../routes/settings/utils";
import TextInput from "../../settings/controls/TextInput";
import SettingsBlockGrid from "../../settings/SettingsBlockGrid";

const ApiKeyBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockGrid title='API' description='Required to get stats'>
            <TextInput
                label='Hypixel API Key'
                placeholder='Paste Here'
                description={
                    <>
                        You can get a Developer Key from
                        <a
                            href="https://developer.hypixel.net"
                            target="_blank"
                            className="text-proxy"> here</a>.
                        Don't mention anything about Proxy!
                    </>
                }
                htmlId='api-key'
                path='general.apiKey'
                className={'h-full border-gray-400'}
                {...bindingProps}
            />
        </SettingsBlockGrid>
    )
}

export default ApiKeyBlock