import { Routes, Route, Navigate } from 'react-router-dom'
import Vitrine from '../../pages/produtos/Vitrine'
import Login from '../../pages/login/login'
import Cadastro from '../../pages/cadastro/cadastro'
import PrivateRoute from './privateRouter'
import Edição from '../../pages/ediçãoProdutos/ediação'
export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/vitrine"
        element={
          <PrivateRoute>
            <Vitrine />
          </PrivateRoute>
        }
      />
      <Route
        path="/edição"
        element={
          <PrivateRoute>
            <Edição />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}