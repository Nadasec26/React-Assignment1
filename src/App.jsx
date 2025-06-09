import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contactus from './components/contactus/Contactus'

let route = createBrowserRouter([
  {path: '' , element : <Layout /> , children : [
    {index : true , element : <Home />},
    {path : 'about' , element : <About />},
    {path : 'portfolio' , element : <Portfolio />},
    {path : 'contact' , element : <Contactus />},
  ]}
])

function App() {

  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
