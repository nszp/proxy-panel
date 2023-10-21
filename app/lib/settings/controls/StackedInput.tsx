import { FC } from 'react'
import { ProxyConfig } from '@proxymod/config'
import { changeBuilder, ConfigPath } from '../../../routes/settings/utils.js'
import jexl from 'jexl'

const StackedInput: FC<{
    htmlIdOne: string
    labelOne: string | JSX.Element
    pathOne: ConfigPath
    typeOne?: 'text' | 'number'
    htmlIdTwo: string
    labelTwo: string | JSX.Element
    pathTwo: ConfigPath
    typeTwo?: 'text' | 'number'
    config: ProxyConfig
    fetcher: any
    getValue: (path: ConfigPath, value: any) => any
    className?: string
}> = ({ htmlIdOne, labelOne, pathOne, typeOne = 'text', htmlIdTwo, labelTwo, pathTwo, typeTwo = 'text', config, fetcher, getValue, className = '' }) => {
    let valueOne: string
    try {
        valueOne = jexl.evalSync(pathOne, config)
    } catch (e) {
        console.log(e)
        valueOne = ''
    }
    valueOne = getValue(pathOne, valueOne)
    const onChangeOne = changeBuilder(pathOne, fetcher)
    let valueTwo: number
    try {
        valueTwo = jexl.evalSync(pathTwo, config)
    } catch (e) {
        console.log(e)
        valueTwo = 0
    }
    valueTwo = getValue(pathTwo, valueTwo)
    const onChangeTwo = changeBuilder(pathTwo, fetcher)
    return (
        <div className={`isolate -space-y-px rounded-md shadow-sm mt-1 w-full ${className}`}>
            <div className='relative w-full border border-neutral-600 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-proxy focus-within:border-proxy transition'>
                <label htmlFor={htmlIdOne} className='block text-xs font-medium text-neutral-400'>
                    {labelOne}
                </label>
                <input type={typeOne} name={htmlIdOne} id={htmlIdOne} value={valueOne} onChange={onChangeOne} className='block bg-lgray-800 w-full border-0 p-0 text-gray-300 placeholder-gray-500 focus:ring-0 sm:text-sm' />
            </div>
            <div className='relative w-full border border-neutral-600 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-proxy focus-within:border-proxy transition'>
                <label htmlFor={htmlIdTwo} className='block w-full text-xs font-medium text-neutral-400'>
                    {labelTwo}
                </label>
                <input type={typeTwo} name={htmlIdTwo} id={htmlIdTwo} value={valueTwo} onChange={onChangeTwo} className='block bg-lgray-800 w-full border-0 p-0 text-gray-300 placeholder-gray-500 focus:ring-0 sm:text-sm' />
            </div>
        </div>
    )
}

export default StackedInput
