import { Navigate, Outlet } from 'react-router-dom'
import { useCSVDataContext } from '../context/CSVDataContext'

function RequireCSVData() {
  const { headers, rows } = useCSVDataContext()

  return headers.length && rows.length ? <Outlet /> : <Navigate to="/" replace />
}

export default RequireCSVData
