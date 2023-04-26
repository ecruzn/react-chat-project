import { PrettyChatWindow } from 'react-chat-engine-pretty'



const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='50d2e591-2cef-40de-8887-163ac887270d'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
                />

        </div>
    )
}

export default ChatsPage