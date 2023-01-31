type FilePreviewTableHeadProps = {
  headers: string[]
}

function FilePreviewTableHead({ headers }: FilePreviewTableHeadProps) {
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
