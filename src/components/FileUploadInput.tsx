import { ChangeEventHandler } from 'react'

type FileUploadInputProps = {
  onFileChange: (file: File | null) => void
  isFileSelected: boolean
}

function FileUploadInput({ onFileChange, isFileSelected }: FileUploadInputProps) {
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files !== null && e.target.files.length > 0) {
      onFileChange(e.target.files[0])
      return
    }

    onFileChange(null)
  }

  return (
    <label htmlFor="file-input">
      Upload file:
      <input
        id="file-input"
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        required
        aria-invalid={!isFileSelected}
      />
    </label>
  )
}

export default FileUploadInput
