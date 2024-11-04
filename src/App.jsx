import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        {/* http://localhost:5173/ */}
        <Route path='/' element={<Landing/>}  />
        {/* http://localhost:5173/home */}
        <Route path='/home' element={<Home/>}  />
        {/* http://localhost:5173/history */}
        <Route path='/history' element={<History/>}  />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
