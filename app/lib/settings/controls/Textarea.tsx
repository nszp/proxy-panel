import { FC } from 'react'
import { ProxyConfig } from '@proxymod/config'
import { changeBuilder, ConfigPath } from '../../../routes/settings/utils.js'
import jexl from 'jexl'

const Textarea: FC<{
    htmlId: string
    label: string | JSX.Element
    rows: number
    resizable?: boolean
    config: ProxyConfig
    path: ConfigPath
    fetcher: any
    getValue: (path: ConfigPath, value: any) => any
}> = ({htmlId, label, rows, resizable = false, config, path, fetcher, getValue}) => {
    let value: string
    try {
        value = jexl.evalSync(path, config)
    } catch (e) {
        console.log(e)
        value = ''
    }
    value = getValue(path, value)
    const onChange = changeBuilder(path, fetcher)
    return (
        <>
            <label htmlFor={htmlId} className="block text-sm font-medium text-gray-200">
                {label}
            </label>
            <div className="mt-1">
                <textarea id={htmlId} name={htmlId} rows={rows} value={value} onChange={onChange}
                          className={`${resizable ? '' : 'resize-none'} bg-lgray-800 text-gray-300 shadow-sm focus:ring-proxy focus:border-proxy block w-full sm:text-sm border border-gray-400 rounded-md`}
                />
            </div>
        </>
    )
}

export default Textarea