import { FC } from 'react'
import { RequiredChildren } from '../../types'

const SettingsBlock: FC<RequiredChildren> = ({ children }) => {
    return (
        <>
            <div className='bg-lgray-800 shadow px-4 py-5 rounded-lg sm:p-6 mt-3 w-full'>{children}</div>
        </>
    )
}

export default SettingsBlock
