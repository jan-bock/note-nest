import './App.css'

import { ChakraProvider, Divider } from '@chakra-ui/react'
import { NavBar } from './components/NavBar/NavBar'
import { NotesPlayGround } from './components/NotesPlayGround/NotesPlayGround'

const App = () => {

  return (
    <ChakraProvider>
      <NavBar />
      <Divider />
      <NotesPlayGround />
    </ChakraProvider>
  )
}

export default App
