import { Navigate, Route, Routes } from 'react-router-dom'
import FilePreview from './pages/FilePreview'
import FileUpload from './pages/FileUpload'
import { CSVDataContextProvider } from './context/CSVDataContext'
import RequireCSVData from './components/RequireCSVData'
import BaseLayout from './layouts/BaseLayout'

function App() {
  return (
    <CSVDataContextProvider>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<FileUpload />} />
          <Route element={<RequireCSVData />}>
            <Route path="preview" element={<FilePreview />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </CSVDataContextProvider>
  )
}

export default App
