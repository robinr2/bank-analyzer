import { useCSVContext } from '../context/CSVContext'

function FilePreviewTableBody() {
  const { rows } = useCSVContext()

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
