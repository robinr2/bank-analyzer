import { Navigate } from 'react-router-dom'
import { useParseCSV } from '../hooks/useParseCSV'

type FileTableViewProps = {
  file: File | null
}

function FileTableView({ file }: FileTableViewProps) {
  if (file === null) return <Navigate to="/" replace />

  const { headers, rows, isLoading, error } = useParseCSV(file)

  if (isLoading) return <progress></progress>

  return (
    <>
      <h1>{file.name}</h1>
      <table role="grid">
        <thead>
          <tr>
            {headers.map((header, headerIndex) => (
              <th key={`header-${headerIndex}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {Object.values(row).map((value, valueIndex) => (
                <td key={`value-${valueIndex}`}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default FileTableView
