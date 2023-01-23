type FileUploadSubmitButtonProps = {
  isFileSelected: boolean
}

function FileUploadSubmitButton({ isFileSelected }: FileUploadSubmitButtonProps) {
  return (
    <button type="submit" disabled={!isFileSelected}>
      Choose file
    </button>
  )
}

export default FileUploadSubmitButton
