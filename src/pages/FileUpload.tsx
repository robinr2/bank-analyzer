import { useEffect } from 'react'
import FileForm from '../components/FileForm'

type FileUploadProps = {
  file: File | null
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
        <FileForm {...props} />
      </article>
    </>
  )
}

export default FileUpload
