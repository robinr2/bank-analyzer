import { Navigate, Outlet } from 'react-router-dom'

type ProtectedRoutesProps = {
  condition: boolean
}

const ProtectedRoutes = ({ condition }: ProtectedRoutesProps) => {
  return condition ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
