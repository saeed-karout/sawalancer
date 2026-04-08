import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './i18n'
import App from './App.jsx'
import './index.css'

// Loading component
const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-cosmic-background">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-cosmic-saturated/30 border-t-cosmic-glow rounded-full animate-spin" />
      <p className="text-cosmic-glow text-lg">Loading Cosmic Experience...</p>
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)