import { Navigate, Route, Routes } from 'react-router-dom'
import FilePreview from './pages/FilePreview'
import FileUpload from './pages/FileUpload'
import { CSVContextProvider } from './context/CSVContext'

function App() {
  return (
    <CSVContextProvider>
      <main className="container">
        <Routes>
          <Route path="/" element={<FileUpload />} />
          <Route path="preview" element={<FilePreview />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </CSVContextProvider>
  )
}

export default App
