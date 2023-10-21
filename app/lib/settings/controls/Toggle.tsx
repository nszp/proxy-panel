import { FC } from 'react'
import { Switch } from '@headlessui/react'
import { ConfigPath, patchValue } from '../../../routes/settings/utils.js'
import { ProxyConfig } from '@proxymod/config'
import jexl from 'jexl'

const Toggle: FC<{
  label: string | JSX.Element
  config: ProxyConfig
  path: ConfigPath
  fetcher: any
  getValue: (path: ConfigPath, value: any) => any
  className?: string
  // enabled: boolean
  // setEnabled: (b: boolean) => void
}> = ({ label, config, path, fetcher, getValue, className = '' }) => {
  // console.log(typeof getValue)
  let value: boolean
  try {
    value = jexl.evalSync(path, config)
  } catch (e) {
    console.log(e)
    value = true
  }
  const enabled: boolean = getValue(path, value)
  const setEnabled = () => patchValue(path, !value, fetcher)
  return (
    <Switch.Group as='div' className={`flex items-center group ${className}`}>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(enabled ? 'bg-proxy group-hover:bg-proxy-hover' : 'bg-lgray-700 group-hover:bg-neutral-700', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none')}>
        <span className='sr-only'>Use setting</span>
        <span aria-hidden='true' className={classNames(enabled ? 'translate-x-5 group-hover:bg-neutral-100' : 'translate-x-0 group-hover:bg-neutral-100', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')} />
      </Switch>
      <Switch.Label as='span' className='ml-3 mb-1'>
        <span className='text-sm font-medium text-gray-300'>{label}</span>
      </Switch.Label>
    </Switch.Group>
  )
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default Toggle
