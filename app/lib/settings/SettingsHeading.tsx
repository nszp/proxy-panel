import { FC } from 'react'
import { RequiredChildren } from '../../types'

const SettingsHeading: FC<RequiredChildren> = ({children}) => {
    return (<div className="max-w-7xl mx-auto mb-[-5pt] mt-5 px-4 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-200">{children}</h1>
    </div>)
}

export default SettingsHeading