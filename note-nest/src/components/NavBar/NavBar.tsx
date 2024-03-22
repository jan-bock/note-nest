import { FC } from 'react';
import { Flex, Box, Spacer, Heading, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'
import { db } from '../../db'

export const NavBar: FC<{}> = () => {

  async function addNote() {
    try {

      const noteContent: string = "";
      const starred: boolean = false;
      const x: number = 0;
      const y: number = 0;
      const id = await db.notes.add({
        noteContent,
        starred,
        x,
        y
      });
    } catch (error: unknown) {
      console.log("Encountered an error: ", error)
    }
  }

  return (
    <Flex bg="white" p="4" alignItems="center" width="100%" h="12">
      <Box p="2">
        <Heading size="sm" color="teal">NoteNest</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mx="2" onClick={addNote}>< AddIcon fontSize="10px" /><Box paddingLeft="10px" fontSize="13px">Add Note</Box></Button>
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
