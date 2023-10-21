import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, } from '@remix-run/react'
import tailwind from './tailwind.css'
import { LinksFunction, V2_MetaFunction } from '@remix-run/node'

export const links: LinksFunction = () => [
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap' },
    // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit&display=swap' },
    { rel: 'stylesheet', href: tailwind },
]

export const meta: V2_MetaFunction = () => {
    return [
        { charset: 'utf-8' },
        { title: 'Proxy' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'theme-color', content: '#a6344d' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Proxy Panel' },
        { property: 'og:description', content: 'Proxy configuration panel' },
        { property: 'og:url', content: 'https://me.proxymod.xyz/' }
    ]
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
        <div className="bg-lgray-900" style={{ fontFamily: 'Inter' }}>
            <Outlet/>
        </div>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    )
}
