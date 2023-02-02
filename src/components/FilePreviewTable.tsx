import FilePreviewTableBody from './FilePreviewTableBody'
import FilePreviewTableHead from './FilePreviewTableHead'

function FilePreviewTable() {
  return (
    <table role="grid">
      <FilePreviewTableHead />
      <FilePreviewTableBody />
    </table>
  )
}

export default FilePreviewTable
