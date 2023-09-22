import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext'
import { BackdropProvider } from './Context/BackdropContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
   <BackdropProvider>
    <App />
   </BackdropProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
