import { FC } from 'react'
import { ProxyConfig } from '@proxymod/config'
import { changeBuilder, ConfigPath } from '../../../../routes/settings/utils.js'
import jexl from 'jexl'

const USTextInput: FC<{
    props: any,
    config: ProxyConfig
    path: ConfigPath
    fetcher: any
    getValue: (path: ConfigPath, value: any) => any
}> = ({props, config, path, fetcher, getValue}) => {
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
        <input {...props} value={value} onChange={onChange}/>
    )
}

export default USTextInput