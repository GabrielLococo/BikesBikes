import { useState } from 'react'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'


function App() {
  const [cartValue, setCartValue] = useState(0)
  return (
    <>
    <NavBar/>
    <ItemListContainer greetings = {'Bienvenidos!'}/>
    </>
  )
}

export default App
