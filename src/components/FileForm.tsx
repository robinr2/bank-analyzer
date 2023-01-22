import React, { useState } from 'react'
import FileInput from './FileInput'
import FileSubmitButton from './FileSubmitButton'

type FileFormProps = {
  onFileSubmit: (file: File) => void
}

function FileForm({ onFileSubmit }: FileFormProps) {
  const [file, setFile] = useState<File | null>(null)
  const isFileSelected = file !== null

  const handleFileSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (!isFileSelected) {
      console.error('Select a file before submitting the form.')
      return
    }

    onFileSubmit(file)
  }

  return (
    <form onSubmit={handleFileSubmit}>
      <FileInput onFileChange={setFile} isFileSelected={isFileSelected} />
      <FileSubmitButton isFileSelected={isFileSelected} />
    </form>
  )
}

export default FileForm
