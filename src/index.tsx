import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './styles/app.scss'
import ConnectedApp from '@/containers/App'

import configureStore from '@/store'
import { Store } from 'redux'
import AppState from '@/store/AppState'

const store = configureStore()

interface Props {
    store: Store<AppState>
}

const Root: React.FunctionComponent<Props> = props => {
    return (
        <Provider store={props.store} >
            <ConnectedApp />
        </Provider>
    )
}

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('app') as HTMLElement
)
