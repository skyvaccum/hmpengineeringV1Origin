import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthState from './context/auth/AuthState'
import ShopState from './context/shop/ShopState'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthState>
        <ShopState>
          <App />
        </ShopState>
      </AuthState>
    </BrowserRouter>
  </React.StrictMode>
)
