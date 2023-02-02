import { Navigate, Outlet } from 'react-router-dom'
import { useCSVContext } from '../context/CSVContext'

function RequireCSVData() {
  const { headers, rows } = useCSVContext()

  return headers.length && rows.length ? <Outlet /> : <Navigate to="/" />
}

export default RequireCSVData
