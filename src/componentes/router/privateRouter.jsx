import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const isAuth = localStorage.getItem('auth') === 'true'
  return isAuth ? children : <Navigate to="/" replace />
}

export default PrivateRoute
