import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OnlineStatus from './OnlineStatus.jsx'
import MouseCoordinate from './MouseCoordinate.jsx'
import ScreenSIze from './ScreenSize.jsx'
import Interval from './Interval.jsx'
import SearchBar from './SearchBar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  <OnlineStatus/>
  <MouseCoordinate/>
  <ScreenSIze/>
  <br />
  <Interval/> <br />
  <SearchBar/>
  </React.StrictMode>,
)
