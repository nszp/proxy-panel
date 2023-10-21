import { FC } from 'react'
import { ProxyConfig } from '@proxymod/config'
import { changeBuilder, ConfigPath } from '../../../routes/settings/utils.js'
import jexl from 'jexl'

const Checkbox: FC<{
    htmlId: string
    label: string | JSX.Element
    description?: string | JSX.Element
    className?: string
    config: ProxyConfig
    path: ConfigPath
    fetcher: any
    disabled?: boolean
    getValue: (path: ConfigPath, value: any) => any
}> = ({ htmlId, label, description, className = '', config, path, fetcher, getValue, disabled }) => {
    let value: boolean
    try {
        value = jexl.evalSync(path, config)
    } catch (e) {
        console.log(e)
        value = true
    }
    const checked: boolean = getValue(path, value)
    const setChecked = changeBuilder(path, fetcher)

    return (
        <>
            <div className={`h-5 flex items-center ${description != null ? 'pt-[10pt]' : 'pt-[1pt]'}`}>
                <input
                    id={htmlId}
                    name={htmlId}
                    checked={checked}
                    onChange={setChecked}
                    disabled={disabled}
                    type='checkbox'
                    className='bg-neutral-700 h-5 w-5 text-proxy border-neutral-600 rounded disabled:pointer-events-none disabled:opacity-50 transition hover:bg-neutral-600 hover:border-neutral-500 focus:ring-0 focus:outline-none cursor-pointer'
                />
            </div>
            <div className={`ml-3 text-sm ${className}`}>
                <label htmlFor={htmlId} className='font-medium text-neutral-300'>
                    {label}
                </label>
                {description != null && <p className='font-light text-neutral-400 text-xs'>{description}</p>}
            </div>
        </>
    )
}
export default Checkbox
