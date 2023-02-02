import { Outlet } from 'react-router-dom'

function BaseLayout() {
  return (
    <main className="container">
      <Outlet />
    </main>
  )
}

export default BaseLayout
