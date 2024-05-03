import React from 'react'
import ReactDOM from 'react-dom/client'
import AppBar from './AppBar.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <AppBar />
    </RecoilRoot>
  </React.StrictMode>
)
