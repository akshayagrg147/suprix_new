import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

// For WordPress deployment in a subfolder, uncomment and set basename:
// If deploying to: yourdomain.com/suprix-app/ use basename="/suprix-app"
// If deploying to root: yourdomain.com/ leave basename empty or use "/"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter /* basename="/suprix-app" */>
      <App />
    </BrowserRouter>
  </StrictMode>
)
