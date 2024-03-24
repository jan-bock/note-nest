import './App.css'

import { ChakraProvider, Divider } from '@chakra-ui/react'
import { NavBar } from './components/NavBar/NavBar'
import { NotesPlayGround } from './components/NotesPlayGround/NotesPlayGround'
import { AcknowledgementsModal } from './components/AcknowledgementsModal/AcknowledgementsModal'
import { useState } from 'react'

const App = () => {
  const [showAcknowledgementsModal, setShowAcknowledgementsModal] = useState(false);

  return (
    <ChakraProvider>
      <NavBar setShowAcknowledgementsModal={setShowAcknowledgementsModal}/>
      <Divider />
      <NotesPlayGround />
      <AcknowledgementsModal showAcknowledgementsModal={showAcknowledgementsModal} setShowAcknowledgementsModal={setShowAcknowledgementsModal}/>
    </ChakraProvider>
  )
}

export default App
