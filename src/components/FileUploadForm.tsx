import { FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCSVContext } from '../context/CSVContext'
import { parseCSV } from '../utils/parseCSV'
import FileUploadInput from './FileUploadInput'
import FileUploadSubmitButton from './FileUploadSubmitButton'

function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const isFileSelected = file !== null
  const { setHeaders, setRows } = useCSVContext()

  const navigate = useNavigate()

  const handleFileSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (!isFileSelected) {
      console.error('Select a file before submitting the form.')
      return
    }

    try {
      const { headers, rows } = await parseCSV(file)
      setHeaders(headers)
      setRows(rows)

      navigate('/preview')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleFileSubmit}>
      <FileUploadInput onFileChange={setFile} isFileSelected={isFileSelected} />
      <FileUploadSubmitButton isFileSelected={isFileSelected} />
    </form>
  )
}

export default FileUploadForm
