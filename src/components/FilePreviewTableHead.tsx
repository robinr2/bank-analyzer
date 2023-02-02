import { useCSVContext } from '../context/CSVContext'

function FilePreviewTableHead() {
  const { headers } = useCSVContext()

  return (
    <thead>
      <tr>
        {headers.map((header, headerIndex) => (
          <th key={`header-${headerIndex}`}>{header}</th>
        ))}
      </tr>
    </thead>
  )
}

export default FilePreviewTableHead
