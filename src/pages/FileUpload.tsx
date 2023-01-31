import { useEffect } from 'react'
import FileUploadForm from '../components/FileUploadForm'

type FileUploadProps = {
  isFileSelected: boolean
  onFileChange: (file: File | null) => void
}

function FileUpload(props: FileUploadProps) {
  const { onFileChange } = props

  useEffect(() => {
    onFileChange(null)
  }, [])

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
