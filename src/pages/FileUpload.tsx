import { useNavigate } from 'react-router-dom'
import FileForm from '../components/FileForm'

function FileUpload() {
  const navigate = useNavigate()

  const onFileSubmit = (file: File) => {
    navigate('/view', { state: { name: file.name } })
  }

  return (
    <>
      <h1>Bank Analyzer</h1>
      <article>
        <FileForm onFileSubmit={onFileSubmit} />
      </article>
    </>
  )
}

export default FileUpload
