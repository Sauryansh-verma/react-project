import {Routes, Route} from 'react-router'
import Home from '../screen/Home'
import About from '../screen/About'
import Contact from '../screen/Contact'
import Details from '../screen/Details'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/details/:id' element={<Details/>} />
      </Routes>
    </div>
  )
}

export default AppRoutes
