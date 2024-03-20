import './App.css'

import { ChakraProvider, Divider } from '@chakra-ui/react'
import { NavBar } from './components/NavBar/NavBar'

const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <Divider />
    </ChakraProvider>
  )
}

export default App
