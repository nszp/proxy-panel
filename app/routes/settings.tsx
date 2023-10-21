import {Link, Outlet, useLoaderData, useLocation} from '@remix-run/react'
import {LoaderFunction} from '@remix-run/node'
import SidebarLink from '../lib/SidebarLink.js'
import {AnimatePresence} from 'framer-motion'

import {authenticator} from '../server/auth.server'
import {UserDocument} from '../server/database.server.js'
import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'

interface LoadedData {
    discord: {
        provider: 'discord'
        id: string
        displayName: string
        photos: any[]
        __json: {
            id: string
            username: string
            avatar: string
            discriminator: string
            public_flags: number
            flags: number
            banner: string | null
            banner_color: string | null
            accent_color: string | null
            locale: string
            mfa_enabled: boolean
        }
    }
    user: UserDocument
}

export let loader: LoaderFunction = async ({request}) => {
    const discord: any = await authenticator.isAuthenticated(request, {
        failureRedirect: '/auth/discord',
    })

    return {discord}
}

export default function Settings() {
    const {
        discord: {__json},
    } = useLoaderData<LoadedData>()
    const discord = __json
    const location = useLocation()
    const pageName = location.pathname.split('/')[2]

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className='h-screen flex overflow-hidden bg-lgray-900'>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-lgray-700 bg-opacity-75"/>
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-lgray-800">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>

                                    </button>
                                </div>
                            </Transition.Child>
                            <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                                <div className='flex items-center flex-shrink-0 px-4'>
                                    <img className='w-full h-auto' src={banner} alt='Banner'/>
                                </div>
                                <nav className='mt-3 flex-1 bg-lgray-800 space-y-1'>
                                    <SidebarLink
                                        to='/general'
                                        label='General'
                                        className='text-lg py-4'
                                        iconClassName='h-7 w-7'
                                        icon={
                                            <g>
                                                <path
                                                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                                                <circle cx="12" cy="12" r="3"/>
                                            </g>
                                        }
                                        selected={pageName === 'general'}
                                    />
                                    <SidebarLink
                                        to='/queuestats'
                                        label='Queuestats'
                                        className='text-lg py-4'
                                        iconClassName='h-7 w-7'
                                        icon={
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                            />
                                        }
                                        selected={pageName === 'queuestats'}
                                    />
                                    <SidebarLink
                                        to='/autododge'
                                        label='Autododge'
                                        className='text-lg py-4'
                                        iconClassName='h-7 w-7'
                                        icon={
                                            // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            //       d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                            // <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                            //       d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'/>
                                            <g>
                                                <rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>
                                            </g>
                                    }
                                        selected={pageName === 'autododge'}
                                    />
                                    <SidebarLink
                                        to='/autogg'
                                        label='AutoGG'
                                        className='text-lg py-4'
                                        iconClassName='h-7 w-7'
                                        icon={<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                                    d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'/>}
                                        selected={pageName === 'autogg'}/>
                                </nav>
                            </div>
                            <div className='flex-shrink-0 flex bg-lgray-700 py-2.5 px-4'>
                                <div className='flex items-center w-full group block'>
                                    <div>
                                        <img className='inline-block h-9 w-9 rounded-full'
                                             src={`https://cdn.discordapp.com/avatars/${discord.id}/${discord.avatar}.png?size=512`}
                                             alt=''/>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='text-sm font-medium text-neutral-300'>
                                            {discord.username}
                                            <span className='text-neutral-400'>#{discord.discriminator}</span>
                                        </p>
                                        <Link to='/auth/logout'
                                              className='group text-xs font-medium text-neutral-400 group-hover:text-rose-300 transition'>
                                            Sign out{' '}
                                            <svg xmlns='http://www.w3.org/2000/svg'
                                                 className='text-lgray-700 group-hover:text-rose-300 h-3 w-3 inline -mt-0.5 transition'
                                                 viewBox='0 0 20 20' fill='currentColor'>
                                                <path fillRule='evenodd'
                                                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                                      clipRule='evenodd'/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex-1 flex flex-col min-h-0 bg-lgray-800">
                    <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                        <div className='flex items-center flex-shrink-0 px-4'>
                            <img className='w-full h-auto' src={banner} alt='Proxy'/>
                        </div>
                        <nav className='mt-3 flex-1 bg-lgray-800 space-y-1'>
                            <SidebarLink
                                to='/general'
                                label='General'
                                icon={
                                    <g>
                                        <path
                                            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </g>
                                }
                                selected={pageName === 'general'}
                            />
                            <SidebarLink
                                to='/queuestats'
                                label='Queuestats'
                                icon={
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                    />
                                }
                                selected={pageName === 'queuestats'}
                            />
                            <SidebarLink
                                to='/autododge'
                                label='Autododge'
                                icon={
                                    // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    //       d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                    // <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                    //       d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'/>
                                    <g>
                                        <rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>
                                    </g>
                                }
                                selected={pageName === 'autododge'}
                            />
                            <SidebarLink to='/autogg' label='AutoGG' icon=
                                {<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                                       d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'/>}
                                         selected={pageName === 'autogg'}/>
                        </nav>
                    </div>
                    <div className='flex-shrink-0 flex bg-lgray-700 py-2.5 px-4'>
                        <div className='flex items-center w-full group'>
                            <div>
                                <img className='inline-block h-9 w-9 rounded-full'
                                     src={`https://cdn.discordapp.com/avatars/${discord.id}/${discord.avatar}.png?size=512`}
                                     alt=''/>
                            </div>
                            <div className='ml-3'>
                                <p className='text-sm font-medium text-neutral-300'>
                                    {discord.username}
                                    <span className='text-neutral-400'>#{discord.discriminator}</span>
                                </p>
                                <Link to='/auth/logout'
                                      className='group text-xs font-medium text-neutral-400 group-hover:text-rose-300 transition'>
                                    Sign out{' '}
                                    <svg xmlns='http://www.w3.org/2000/svg'
                                         className='text-lgray-700 group-hover:text-rose-300 h-3 w-3 inline -mt-0.5 transition'
                                         viewBox='0 0 20 20' fill='currentColor'>
                                        <path fillRule='evenodd'
                                              d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                              clipRule='evenodd'/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 md:hidden pl-2 pt-2 sm:pl-3 sm:pt-3 bg-lgray-900">
                    <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center text-white rounded-md text-neutral-300 hover:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>

                    </button>
                </div>
                <main className='flex-1 relative z-0 focus:outline-none overflow-y-scroll overflow-x-hidden'>
                    <AnimatePresence>
                        <Outlet/>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    )
}
