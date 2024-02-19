import React from 'react'
import ReactDOM from 'react-dom/client'
import '../public/scss/global.scss'
import {AppRoutes} from './Routes.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <div className='main'>
      <AppRoutes />
    </div>
    
  </React.StrictMode>,
)
