import FilePreviewForm from '../components/FilePreviewForm'
import FilePreviewTable from '../components/FilePreviewTable'
import { Row } from '../utils/parseCSV'

type FilePreviewProps = {
  headers: string[]
  rows: Row[]
}

function FilePreview(props: FilePreviewProps) {
  // if (file === null) return <Navigate to="/" replace />

  return (
    <>
      <FilePreviewForm />
      <FilePreviewTable {...props} />
    </>
  )
}

export default FilePreview
