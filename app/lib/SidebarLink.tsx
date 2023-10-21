import { Link } from '@remix-run/react'
import { FC } from 'react'

const SidebarLink: FC<{
    to: string
    label: string | JSX.Element
    icon: JSX.Element
    selected: boolean
    className?: string
    iconClassName?: string
}> = ({to, label, icon, selected, className = '', iconClassName = ''}) => {
    return (
        <Link to={'/settings' + to}>
            <span className={`${
                selected
                    ? 'bg-proxy bg-opacity-25 border-proxy text-neutral-300'
                    : 'border-transparent text-neutral-300  hover:bg-lgray-700 hover:text-white'
            } flex items-center px-2 py-2 text-sm font-medium border-l-4 rounded transition-all cursor-pointer mb-1.5 group ${className}`}>
                <svg className={`${selected
                    ? 'text-proxy group-hover:text-proxy'
                    : 'text-neutral-400 group-hover:text-neutral-300'
                } mr-3 flex-shrink-0 h-6 w-6 transition-all ${iconClassName}`}
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round"
                     aria-hidden="true">
                    {icon}
                </svg>
                {label}
            </span>
        </Link>
    )
}

export default SidebarLink
