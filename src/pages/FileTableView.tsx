type FileTableViewProps = {
  file: File | null
}

// TODO: Redirect to '/' if file is null

function FileTableView({ file }: FileTableViewProps) {
  return <h1>{file !== null ? file.name : 'No file found.'}</h1>
}

export default FileTableView
