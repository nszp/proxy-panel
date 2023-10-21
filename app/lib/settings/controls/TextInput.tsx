import { FC, Fragment } from 'react'
import { ProxyConfig } from '@proxymod/config'
import { changeBuilder, ConfigPath } from '../../../routes/settings/utils.js'
import jexl from 'jexl'

const TextInput: FC<{
    htmlId: string
    placeholder?: string
    label: string | JSX.Element
    description?: string | JSX.Element
    type?: 'text' | 'number'
    className?: string
    config: ProxyConfig
    path: ConfigPath
    fetcher: any
    getValue: (path: ConfigPath, value: any) => any
}> = ({ htmlId, label, description, type = 'string', className = '', config, path, fetcher, getValue, placeholder }) => {
    let value: string
    try {
        value = jexl.evalSync(path, config)
    } catch (e) {
        console.log(e)
        value = ''
    }
    value = getValue(path, value)
    const onChange = changeBuilder(path, fetcher)

    const classNames = (...classes: Array<any>) => {
        return classes.filter(Boolean).join(' ')
    }

    // if (path === 'general.apiKey') {
    //     console.log(config.general)
    //     console.log(value)
    // }

    return (
        <Fragment>
            <div className='relative border border-neutral-600 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-proxy focus-within:border-proxy transition'>
                <label htmlFor={htmlId} className='absolute -top-2 left-2 -mt-px inline-block px-1 bg-lgray-800 text-xs font-medium text-neutral-300'>
                    {label}
                </label>
                <input
                    type={type}
                    name={htmlId}
                    id={htmlId}
                    value={value}
                    onChange={onChange}
                    className={classNames(className, 'bg-lgray-800 block w-full border-0 p-0 text-neutral-300 placeholder-neutral-400 sm:text-sm transition focus:ring-none focus:outline-none')}
                    placeholder={placeholder ? placeholder : ''}
                />
            </div>
            {description && (
                <p className='mt-2 text-sm text-neutral-400' id='key-description'>
                    {description}
                </p>
            )}
        </Fragment>
    )
}

export default TextInput
