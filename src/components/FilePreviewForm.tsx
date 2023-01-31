import { useNavigate } from 'react-router-dom'

function FilePreviewForm() {
  const navigate = useNavigate()

  const handlePreviewSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()

    navigate('/analysis')
  }

  return (
    <form onSubmit={handlePreviewSubmit}>
      <button type="submit">Analyze</button>
    </form>
  )
}

export default FilePreviewForm
