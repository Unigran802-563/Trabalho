import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Vitrine from './componentes/Vitrine.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Vitrine></Vitrine>
   
  </StrictMode>,
)
