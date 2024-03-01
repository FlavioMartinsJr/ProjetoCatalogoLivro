import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/Auth/AuthProvider';
import '../public/scss/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppRoutes} from './Routes.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
      <div className='main'>
        {/* <AuthProvider> */}
          <AppRoutes />
        {/* </AuthProvider>   */}
      </div>
  </React.StrictMode>,
)
