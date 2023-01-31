import { Navigate } from 'react-router-dom'
import FilePreviewForm from '../components/FilePreviewForm'
import FilePreviewTable from '../components/FilePreviewTable'
import { useParseCSV } from '../hooks/useParseCSV'

type FilePreviewProps = {
  file: File | null
}

function FilePreview({ file }: FilePreviewProps) {
  if (file === null) return <Navigate to="/" replace />

  const { headers, rows, isLoading, error } = useParseCSV(file)

  if (isLoading) return <progress></progress>
  if (error) return <h1>{error}</h1>

  return (
    <>
      <h1>{file.name}</h1>
      <FilePreviewForm />
      <FilePreviewTable headers={headers} rows={rows} />
    </>
  )
}

export default FilePreview
