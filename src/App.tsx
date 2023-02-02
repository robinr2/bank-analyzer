import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Row } from './utils/parseCSV'
import FilePreview from './pages/FilePreview'
import FileUpload from './pages/FileUpload'

function App() {
  const [headers, setHeaders] = useState<string[]>([])
  const [rows, setRows] = useState<Row[]>([])

  const onFileSubmit = (headers: string[], rows: Row[]) => {
    setHeaders(headers)
    setRows(rows)
  }

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<FileUpload onFileSubmit={onFileSubmit} />} />
        <Route path="preview" element={<FilePreview headers={headers} rows={rows} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App
