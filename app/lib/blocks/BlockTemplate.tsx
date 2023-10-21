import { useBindingProps } from "routes/settings/utils"
import SettingsBlockGrid from "../settings/SettingsBlockGrid";

const Block = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockGrid title="Block" description="hello!">hello</SettingsBlockGrid>
    )
}

export default Block