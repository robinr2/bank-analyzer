import React from 'react'
import { useNavigate } from 'react-router-dom'
import FileInput from './FileInput'
import FileSubmitButton from './FileSubmitButton'

type FileFormProps = {
  file: File | null
  onFileChange: (file: File | null) => void
}

function FileForm({ file, onFileChange }: FileFormProps) {
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
      <FileInput onFileChange={onFileChange} isFileSelected={isFileSelected} />
      <FileSubmitButton isFileSelected={isFileSelected} />
    </form>
  )
}

export default FileForm
