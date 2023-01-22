type FileSubmitButtonProps = {
  isFileSelected: boolean
}

function FileSubmitButton({ isFileSelected }: FileSubmitButtonProps) {
  return (
    <button type="submit" disabled={!isFileSelected}>
      Choose file
    </button>
  )
}

export default FileSubmitButton
