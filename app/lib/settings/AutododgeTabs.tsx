import { FC, useState } from 'react'
import SettingsBlock from './SettingsBlock.js'
import SettingsTabs from './SettingsTabs.js'
import Toggle from './controls/Toggle.js'
import { ProxyConfig } from '@proxymod/config'
import { ConfigPath } from '../../routes/settings/utils.js'
import Checkbox from './controls/Checkbox.js'
import USTextInput from './controls/unstyled/USTextInput.js'
import jexl from 'jexl'
import { PremiumLabel } from '../PremiumLabel.js'

type AutododgeTab =
    | {
          heading: string
          name: string
          variable: string
          lowest: string
          highest: string
          path: ConfigPath
      }
    | {
          heading: string
          content: JSX.Element
      }

const AutododgeTabs: FC<{
    title: string
    path: ConfigPath
    tabs: AutododgeTab[]
    bindingProps: { fetcher: any; getValue: (path: ConfigPath, value: any) => any; config: ProxyConfig & { id: string } }
}> = ({ title, path, tabs, bindingProps }) => {
    const [test, setTest] = useState(0)

    const evaluateValue = (path: ConfigPath, context: any) => {
        try {
            // console.log(jexl.evalSync(path, bindingProps.config))
            // return jexl.evalSync(path, bindingProps.config) === ""
            return jexl.evalSync(jexl.evalSync(path, bindingProps.config), context)
        } catch (e) {
            return false
        }
    }

    return (
        <SettingsBlock>
            <div className='grid justify-start w-full grid-rows-none gap-x-1 pb-6 -mt-2'>
                <h3 className='text-lg font-medium leading-6 text-neutral-300 row-start-1 mr-3'>{title}</h3>
                {/*<h3 className='text-white font-extrabold text-sm leading-6 font-extralight mr-5 row-start-1'>BETA</h3>*/}
                <Toggle className='z-50 row-start-1 justify-self-end' label='Enabled' path={`${path}.enabled` as ConfigPath} {...bindingProps} />
            </div>

            <SettingsTabs
                tabs={tabs.map((tab, index): {
                    heading: string
                    content: JSX.Element
                } => {
                    if ('content' in tab) {
                        return {
                            heading: tab.heading,
                            content: tab.content,
                        }
                    }
                    if ('path' in tab) {
                        return {
                            heading: tab.heading,
                            content: (
                                <>
                                    <div className='col-span-4 sm:col-span-2 mt-2 flex items-start'>
                                        <Checkbox
                                            htmlId={`autododge-${title}-${index}-should-lowest`}
                                            label={
                                                <>
                                                    <span>
                                                        {tab.lowest}
                                                        <USTextInput
                                                            props={{
                                                                type: 'text',
                                                                className: 'outline-none border-0 h-[1.55rem] border-neutral-500 border-b-2 ml-2 w-[3.4rem] bg-lgray-700 p-1 focus:ring-0 focus:border-b-proxy transition hover:bg-neutral-700 focus:hover:bg-lgray-700 rounded-t',
                                                            }}
                                                            path={`${tab.path}.lowest` as ConfigPath}
                                                            {...bindingProps}
                                                        />
                                                    </span>
                                                </>
                                            }
                                            path={`${tab.path}.lowestEnabled` as ConfigPath}
                                            {...bindingProps}
                                        />
                                    </div>
                                    <div className='col-span-3 flex items-start'>
                                        <Checkbox
                                            htmlId={`autododge-${title}-${index}-should-higher`}
                                            label={
                                                <>
                                                    <span>
                                                        {tab.highest}
                                                        <USTextInput
                                                            props={{
                                                                type: 'text',
                                                                className: 'outline-none border-0 h-[1.55rem] border-neutral-500 border-b-2 ml-2 w-[3.4rem] bg-lgray-700 p-1 focus:ring-0 focus:border-b-proxy transition hover:bg-neutral-700 focus:hover:bg-lgray-700 rounded-t',
                                                            }}
                                                            path={`${tab.path}.highest` as ConfigPath}
                                                            {...bindingProps}
                                                        />
                                                    </span>
                                                </>
                                            }
                                            path={`${tab.path}.highestEnabled` as ConfigPath}
                                            {...bindingProps}
                                        />
                                    </div>
                                    <div className='col-span-4 flex items-start'>
                                        <Checkbox
                                            htmlId={`autododge-${title}-${index}-should-condition`}
                                            className='w-full'
                                            label={
                                                <>
                                                    <span className='w-full'>
                                                        Dodge if:
                                                        <USTextInput
                                                            props={{
                                                                type: 'text',
                                                                className: 'outline-none border-0 h-[1.8rem] font-mono border-neutral-500 border-b-2 ml-2 w-3/4 bg-lgray-700 p-1 focus:ring-0 focus:border-b-proxy transition hover:bg-neutral-700 focus:hover:bg-lgray-700 rounded-t',
                                                            }}
                                                            path={`${tab.path}.condition` as ConfigPath}
                                                            {...bindingProps}
                                                        />
                                                    </span>
                                                </>
                                            }
                                            path={`${tab.path}.conditionEnabled` as ConfigPath}
                                            {...bindingProps}
                                        />
                                    </div>
                                    <div className='col-span-4 flex items-start'>
                                        <span className='ml-8 text-sm text-neutral-300'>
                                            This condition
                                            <span className='font-extrabold'>{evaluateValue(`${tab.path}.condition` as ConfigPath, Object.defineProperty({}, tab.variable, { value: test })) ? ' will ' : ' will not '}</span>
                                            dodge an opponent with a {tab.name} of{' '}
                                            <input
                                                type='text'
                                                maxLength={5}
                                                id={`autododge-${title}-${index}-test-condition`}
                                                onChange={(e) => {
                                                    setTest(parseInt(e.target.value))
                                                }}
                                                className='outline-none border-0 h-[1.55rem] border-neutral-500 border-b-2 ml-2 w-[3.4rem] bg-lgray-700 p-1 focus:ring-0 focus:border-b-proxy transition hover:bg-neutral-700 focus:hover:bg-lgray-700 rounded-t'
                                            />
                                        <PremiumLabel text={['LILITH PRO']}/>
                                        </span>
                                    </div>
                                    {/*<div className="col-span-4 sm:col-span-2 mt-1">*/}
                                    {/*    <Toggle label={`Dodge ${tab.name}`}*/}
                                    {/*            path={`${tab.path}.enabled` as ConfigPath} {...bindingProps} />*/}
                                    {/*</div>*/}
                                    {/*<div className="col-span-4 sm:col-span-2 -mt-3">*/}
                                    {/*    <StackedInput htmlIdOne={`autododge-${title}-${index}-lowest`} labelOne="Lowest"*/}
                                    {/*                  pathOne={`${tab.path}.lowest` as ConfigPath} typeOne="number"*/}
                                    {/*                  htmlIdTwo={`autododge-${title}-${index}-highest`} labelTwo="Highest"*/}
                                    {/*                  pathTwo={`${tab.path}.highest` as ConfigPath} typeTwo="number"*/}
                                    {/*                  className="md:w-1/2 lg:w-1/3"*/}
                                    {/*                  {...bindingProps}/>*/}
                                    {/*</div>*/}
                                </>
                            ),
                        }
                    }
                    return {
                        heading: 'Error',
                        content: <p>Oops</p>,
                    }
                })}
            />
        </SettingsBlock>
    )
}

export default AutododgeTabs
