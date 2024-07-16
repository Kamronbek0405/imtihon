import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './page/home'
import { About } from './page/about'
import { Shop } from './page/shop'
import { MainLayout } from './layout/main-layout'
import { NotFound } from './page/not-found'
import { Malumot } from './page/shop/components/malumot/malumot'
import { Projects } from './page/projects'
import { News } from './page/news'


function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/malumot/:id' element={<Malumot/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      </Routes>
    </>
  )
}

export default App
