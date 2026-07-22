import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Catalog from './views/Catalog'

const App = () => {

  const location = useLocation()

  const state = location.state as {bgLocation?: Location}

  return (
    <>
      <Routes location={state?.bgLocation || location}>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/catalog' element={ <Catalog/> }></Route>
      </Routes>

      {/* Modal */}
      {state?.bgLocation && (
        <Routes>
          <Route path='/login' element={ <Login/> }></Route>
        </Routes>
      )}
      
    </>
  )
}

export default App


