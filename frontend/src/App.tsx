import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'

const App = () => {

  const location = useLocation()

  const state = location.state as {bgLocation?: Location}

  return (
    <>
      <Routes location={state?.bgLocation || location}>
        <Route path='/' element={ <Home/> }></Route>
      </Routes>

      {state?.bgLocation && (
        <Routes>
          <Route path='/login' element={ <Login/> }></Route>
        </Routes>
      )}
      
    </>
  )
}

export default App


