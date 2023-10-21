import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function InformationTooltip({ content }: {
    content: string | JSX.Element
}) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="">
                    <InformationCircleIcon className="ml-1 -mb-1 h-[1rem] w-[1rem] text-white" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-lgray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-2">
                        { content }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}