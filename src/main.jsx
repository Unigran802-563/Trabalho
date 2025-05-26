import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Vitrine from './pages/produtos/Vitrine'
import Login from "./pages/login/login.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <Login></Login>
  </StrictMode>,
)
