import { Navigate, Route, Routes } from 'react-router-dom'
import FileTableView from './pages/FileTableView'
import FileUpload from './pages/FileUpload'

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/view" element={<FileTableView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App
