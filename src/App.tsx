import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import FilePreview from './pages/FilePreview'
import FileUpload from './pages/FileUpload'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const isFileSelected = file !== null

  return (
    <main className="container">
      <Routes>
        <Route
          path="/"
          element={<FileUpload isFileSelected={isFileSelected} onFileChange={setFile} />}
        />
        <Route element={<ProtectedRoutes condition={isFileSelected} />}>
          <Route path="preview" element={<FilePreview file={file} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App
