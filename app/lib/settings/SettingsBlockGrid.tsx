import SettingsBlock from './SettingsBlock.js'
import { FC } from 'react'
import { RequiredChildren } from '../../types'

const SettingsBlockGrid: FC<{
    title: string | JSX.Element
    description: string | JSX.Element
} & RequiredChildren> = ({ title, description, children }) => {
    return (
        <>
            <SettingsBlock>
                <div className='md:grid md:grid-cols-4 md:gap-6'>
                    <div className='md:col-span-1'>
                        <h3 className='text-lg font-medium leading-6 text-neutral-300'>{title}</h3>
                        <p className='mt-1.5 text-sm text-neutral-400'>{description}</p>
                    </div>
                    <div className='mt-5 md:mt-0 md:col-span-3'>

                        <div className='space-y-6'>
                            {/*{children}*/}
                            <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
                                <div className='lg:col-span-2'>{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SettingsBlock>
        </>
    )
}

export default SettingsBlockGrid
