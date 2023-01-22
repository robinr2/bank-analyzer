import { useLocation } from 'react-router-dom'

function FileTableView() {
  // TODO: Type this.
  // put the file as state into the app and drill it to components
  const { state } = useLocation()

  return <h1>{state.name}</h1>
}

export default FileTableView
