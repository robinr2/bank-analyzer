import { Navigate } from 'react-router-dom'
import { useParseCSV } from '../hooks/useParseCSV'

type FileTableViewProps = {
  file: File | null
}

function FileTableView({ file }: FileTableViewProps) {
  if (file === null) return <Navigate to="/" replace />

  const { headers, rows, error, isLoading } = useParseCSV(file)

  if (isLoading) return <h1>Loading...</h1>

  return <h1>{file.name}</h1>
}

export default FileTableView
