import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Animals from './Animals.jsx'
import StateButton from './StateButton.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Animals />
    <StateButton />
  </React.StrictMode>,
)
