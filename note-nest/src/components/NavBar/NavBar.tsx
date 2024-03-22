import { FC } from 'react';
import { Flex, Box, Spacer, Heading, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'
import { db } from '../../db'

export const NavBar: FC<{}> = () => {
  async function addNote() {
    try {

      const noteContent = "jan's note";
      const starred = false;
      const id = await db.notes.add({
        noteContent,
        starred
      });
      console.log("completed: ", id)
    } catch {
      console.log("error")
    }
  }

  return (
    <Flex bg="white" p="4" alignItems="center" width="100%" h="12">
      <Box p="2">
        <Heading size="sm" color="teal">NoteNest</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mx="2">< AddIcon fontSize="10px" onClick={() => addNote()} /><Box paddingLeft="10px" fontSize="13px">Add Note</Box></Button>
      </Box>
      <Box>
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='Options'
          icon={<HamburgerIcon />}
          mx={2}
        />
      </Box>
    </Flex>
  );
};
