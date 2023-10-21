import { motion } from 'framer-motion'
import SettingsHeading from './SettingsHeading.js'
import { FC } from 'react'
import { RequiredChildren } from '../../types'

const SettingsPage: FC<{
    name: string | JSX.Element,
    link: string
    description: string | JSX.Element,
} & RequiredChildren> = ({ name, children }) => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <SettingsHeading>{name}</SettingsHeading>
                {/*<PageHeader title={name} link={link} description={description}/>*/}
                <div className='max-w-7xl mx-auto py-5 px-4 sm:px-6 md:px-8 bg-lgray-900 transition-container w-full'>{children}</div>
            </motion.div>
        </>
    )
}

export default SettingsPage
