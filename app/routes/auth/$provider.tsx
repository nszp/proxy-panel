import { LoaderFunction } from '@remix-run/node'
import { authenticator } from '../../server/auth.server'

export let loader: LoaderFunction = ({request, params}) => {
    return authenticator.authenticate(params.provider ?? '', request)
}

// export let action: ActionFunction = ({ request, params }) => {
//     return authenticator.authenticate(params.provider ?? '', request);
// };

// export default function DiscordAuth() {
//     const submit = useSubmit()
//     useEffect(() => {
//         submit(null, { method: 'post'})
//     })
//     return (<div>
//             <p>Please wait...</p>
//     </div>)
//
// }