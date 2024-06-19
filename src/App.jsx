
import { NavLink, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from './pages/NotFoundPage'
import clsx from 'clsx'
import css from '/src/App.module.css'

const  linkClass = ({isActive}) => {
  return clsx(css.link, isActive && css.active);
}

function App() {
<NavLink to = '/' className={linkClass}>
 Home
</NavLink>

  return (
    <>
    <Routes>
      <Route >
        <Route path='/' element = {<HomePage/>} />
        <Route path='/moviesPage' element = {<MoviesPage/>} />
        <Route path='*' element ={<NotFoundPage to="/"/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
