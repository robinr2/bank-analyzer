import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row } from '../utils/parseCSV'
import { parseCSV } from '../utils/parseCSV'
import FileUploadInput from './FileUploadInput'
import FileUploadSubmitButton from './FileUploadSubmitButton'

// TODO: To reduce type duplication, headers and rows should be in context
type FileUploadFormProps = {
  onFileSubmit: (headers: string[], rows: Row[]) => void
}

function FileUploadForm({ onFileSubmit }: FileUploadFormProps) {
  const [file, setFile] = useState<File | null>(null)
  const isFileSelected = file !== null

  const navigate = useNavigate()

  const handleFileSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (!isFileSelected) {
      console.error('Select a file before submitting the form.')
      return
    }

    try {
      const { headers, rows } = await parseCSV(file)
      onFileSubmit(headers, rows)
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
