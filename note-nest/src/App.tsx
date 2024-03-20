import './App.css'

import { ChakraProvider } from '@chakra-ui/react'
import { NavBar } from './components/NavBar/NavBar'

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  )
}

export default App
