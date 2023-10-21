import { FC } from 'react'

export const PremiumLabel: FC<{
    text: Array<string | JSX.Element> | string | JSX.Element
}> = ({ text }) => {
    if (!Array.isArray(text)) return <span className="text-white font-extrabold ml-2" style={{fontFamily: 'Outfit'}}>{ text }</span>
    if (text.length === 3) {
        return (
            <a href="https://patreon.com/proxymod" target="_blank"><span style={{fontFamily: 'Outfit'}}><span className="text-white font-extrabold ml-2">{ text[0] }</span><span className="text-white font-medium">{ text[1] }</span><span className="text-white font-light">{ text[2] }</span></span></a>
        )
    } else if (text.length === 2) {
        return (
            <a href="https://patreon.com/proxymod" target="_blank"><span style={{fontFamily: 'Outfit'}}><span className="text-white font-extrabold ml-2">{ text[0] }</span><span className="text-white font-medium">{ text[1] }</span></span></a>
        )
    } else {
        return (
            <a href="https://patreon.com/proxymod" target="_blank"><span className="text-white font-extrabold ml-2" style={{fontFamily: 'Outfit'}}>{ text }</span></a>
        )
    }
}