import { useCSVDataContext } from '../context/CSVDataContext'

function FilePreviewTableBody() {
  const { rows } = useCSVDataContext()

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
