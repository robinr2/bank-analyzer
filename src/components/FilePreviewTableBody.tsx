import { Row } from '../utils/parseCSV'

type FilePreviewTableBodyProps = {
  rows: Row[]
}

function FilePreviewTableBody({ rows }: FilePreviewTableBodyProps) {
  return (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={`row-${rowIndex}`}>
          {Object.values(row).map((value, valueIndex) => (
            <td key={`value-${valueIndex}`}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default FilePreviewTableBody
