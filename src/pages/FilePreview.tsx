import FilePreviewForm from '../components/FilePreviewForm'
import FilePreviewTable from '../components/FilePreviewTable'

function FilePreview() {
  // if (file === null) return <Navigate to="/" replace />

  return (
    <>
      <FilePreviewForm />
      <FilePreviewTable />
    </>
  )
}

export default FilePreview
