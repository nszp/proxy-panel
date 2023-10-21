import { FC } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const SettingsTabs: FC<{
    tabs: {
        heading: string
        content: JSX.Element
    }[]
    className?: string
}> = ({ tabs, className = '' }) => {
    return (
        <Tab.Group>
            <Tab.List className={className}>
                <div className='border-b border-lgray-700 mb-4 -mx-6 -mt-2'>
                    <nav className='-mb-px flex space-x-4 mx-6'>
                        {tabs.map((tab) => (
                            <Tab
                                key={tab.heading}
                                className={({ selected }) =>
                                    classNames(selected ? 'border-proxy text-proxy font-medium' : 'border-transparent text-neutral-400 hover:text-neutral-300 hover:border-neutral-300', 'outline-none ring-none transition pb-3 px-1 whitespace-nowrap border-b-2 font-medium text-sm')
                                }>
                                {tab.heading}
                            </Tab>
                        ))}
                    </nav>
                </div>
            </Tab.List>
            <Tab.Panels>
                {tabs.map((tab) => (
                    <Tab.Panel key={tab.heading}>
                        <div className='grid grid-cols-3 gap-6'>{tab.content}</div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default SettingsTabs
