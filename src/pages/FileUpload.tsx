import FileUploadForm from '../components/FileUploadForm'
import { Row } from '../utils/parseCSV'

type FileUploadProps = {
  onFileSubmit: (headers: string[], rows: Row[]) => void
}

function FileUpload(props: FileUploadProps) {
  return (
    <>
      <h1>Bank Analyzer</h1>
      <article>
        <FileUploadForm {...props} />
      </article>
    </>
  )
}

export default FileUpload
