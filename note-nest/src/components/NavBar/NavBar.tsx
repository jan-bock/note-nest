import { FC } from 'react';
import { Flex, Box, Spacer, Heading, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'

export const NavBar: FC<{}> = () => {
    return (
        <Flex bg="white" p="4" alignItems="center" width="100%" h="12">
            <Box p="2">
                <Heading size="sm" color="teal">NoteNest</Heading>
            </Box>
            <Spacer />
            <Box>
                <Button colorScheme="teal" mx="2">< AddIcon /></Button>
            </Box>
            <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Options'
                fontSize='20px'
                icon={<HamburgerIcon />}
            />
        </Flex>
    );
};
