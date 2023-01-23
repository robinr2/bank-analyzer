import { Navigate } from 'react-router-dom'

type FileTableViewProps = {
  file: File | null
}

function FileTableView({ file }: FileTableViewProps) {
  if (file === null) return <Navigate to="/" replace />

  return <h1>{file !== null ? file.name : 'No file found.'}</h1>
}

export default FileTableView
