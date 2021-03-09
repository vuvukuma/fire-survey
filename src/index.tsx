import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { getMessages } from './i18n'
import reportWebVitals from './reportWebVitals'

import './tailwind.output.css'
import App from './components/app/App'
import { ModalProvider } from './layout/modal/ModalProvider'

const browserLocale = navigator.language.slice(0, 2)
const messages = getMessages(browserLocale)

ReactDOM.render(
    <React.StrictMode>
        <ModalProvider>
            <IntlProvider locale={browserLocale} messages={messages}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </IntlProvider>
        </ModalProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
