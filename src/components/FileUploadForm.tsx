import React from 'react'
import { useNavigate } from 'react-router-dom'
import FileUploadInput from './FileUploadInput'
import FileUploadSubmitButton from './FileUploadSubmitButton'

type FileUploadFormProps = {
  file: File | null
  onFileChange: (file: File | null) => void
}

function FileUploadForm({ file, onFileChange }: FileUploadFormProps) {
  const isFileSelected = file !== null
  const navigate = useNavigate()

  const handleFileSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (!isFileSelected) {
      console.error('Select a file before submitting the form.')
      return
    }

    navigate('/view')
  }

  return (
    <form onSubmit={handleFileSubmit}>
      <FileUploadInput onFileChange={onFileChange} isFileSelected={isFileSelected} />
      <FileUploadSubmitButton isFileSelected={isFileSelected} />
    </form>
  )
}

export default FileUploadForm
