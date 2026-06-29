import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster richColors position='top-right' />
      <AuthProvider>
       <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
