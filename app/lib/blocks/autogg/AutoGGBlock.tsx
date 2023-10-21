import {useBindingProps} from "../../../routes/settings/utils";
import SettingsBlockGrid from "../../settings/SettingsBlockGrid";
import Toggle from "../../settings/controls/Toggle";
import StackedInput from "../../settings/controls/StackedInput";
import Checkbox from '../../settings/controls/Checkbox'
import TextInput from '../../settings/controls/TextInput'

const AutoGGBlock = () => {
    const bindingProps = useBindingProps()

    return (
        <SettingsBlockGrid title='AutoGG' description='Automatically say gg or join another game'>
            <div className='col-span-4 sm:col-span-2'>
                <Toggle label='Enable AutoGG' path='autogg.enabled' {...bindingProps} />
            </div>
            <div className='col-span-4 sm:col-span-2 mt-4 flex items-start'>
                <Checkbox htmlId='autogg-first-enabled' label='First Message' path='autogg.first.enabled' {...bindingProps} />
            </div>
            <div className='col-span-4 sm:col-span-2 mt-4'>
                <StackedInput htmlIdOne='autogg-first-message' labelOne='Message' pathOne='autogg.first.message' htmlIdTwo='autogg-first-delay' labelTwo='Delay' pathTwo='autogg.first.delay' typeTwo='number' {...bindingProps} />
            </div>
            <div className='col-span-4 sm:col-span-2 mt-4 flex items-start'>
                <Checkbox htmlId='autogg-second-enabled' label='Second Message' path='autogg.second.enabled' {...bindingProps} />
            </div>
            <div className='col-span-4 sm:col-span-2 mt-4'>
                <StackedInput htmlIdOne='autogg-second-message' labelOne='Message' pathOne='autogg.second.message' htmlIdTwo='autogg-second-delay' labelTwo='Delay' pathTwo='autogg.second.delay' typeTwo='number' {...bindingProps} />
            </div>
            <div className='col-span-4 sm:col-span-2 mt-4 flex items-start'>
                <Checkbox htmlId='autogg-requeue-enabled' label='Requeue' path='autogg.requeue.enabled' {...bindingProps} />
            </div>
            <div className='col-span-4 sm:col-span-2 mt-6 items-start'>
                <TextInput label='Requeue Delay' htmlId='autogg-requeue-delay' path='autogg.requeue.delay' type='number' className='w-full bg-lgray-800 focus:border-none' {...bindingProps} />
            </div>
        </SettingsBlockGrid>
    )
}

export default AutoGGBlock