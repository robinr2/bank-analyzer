import { Row } from '../hooks/useParseCSV'
import FilePreviewTableBody from './FilePreviewTableBody'
import FilePreviewTableHead from './FilePreviewTableHead'

type FilePreviewTableProps = {
  headers: string[]
  rows: Row[]
}

function FilePreviewTable({ headers, rows }: FilePreviewTableProps) {
  return (
    <table role="grid">
      <FilePreviewTableHead headers={headers} />
      <FilePreviewTableBody rows={rows} />
    </table>
  )
}

export default FilePreviewTable
