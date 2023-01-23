import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FileTableView from './pages/FileTableView'
import FileUpload from './pages/FileUpload'

function App() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<FileUpload file={file} onFileChange={setFile} />} />
        <Route path="view" element={<FileTableView file={file} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App
