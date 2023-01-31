import React from 'react'
import { useNavigate } from 'react-router-dom'
import FileUploadInput from './FileUploadInput'
import FileUploadSubmitButton from './FileUploadSubmitButton'

type FileUploadFormProps = {
  isFileSelected: boolean
  onFileChange: (file: File | null) => void
}

function FileUploadForm({ isFileSelected, onFileChange }: FileUploadFormProps) {
  const navigate = useNavigate()

  const handleFileSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (!isFileSelected) {
      console.error('Select a file before submitting the form.')
      return
    }

    navigate('/preview')
  }

  return (
    <form onSubmit={handleFileSubmit}>
      <FileUploadInput onFileChange={onFileChange} isFileSelected={isFileSelected} />
      <FileUploadSubmitButton isFileSelected={isFileSelected} />
    </form>
  )
}

export default FileUploadForm
