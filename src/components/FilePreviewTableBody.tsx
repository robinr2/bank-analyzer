import { useCSVDataContext } from '../context/CSVDataContext'

function FilePreviewTableBody() {
  const { headers, rows } = useCSVDataContext()

  return (
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={`row-${rowIndex}`}>
          {headers.map((header, headerIndex) => (
            <td key={`value-${headerIndex}`}>{row[header]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default FilePreviewTableBody
