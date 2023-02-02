import { useCSVDataContext } from '../context/CSVDataContext'

function FilePreviewTableHead() {
  const { headers } = useCSVDataContext()

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
