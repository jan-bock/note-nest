import { FC } from "react";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  StarIcon,
  ExternalLinkIcon,
  QuestionIcon,
  AtSignIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { db } from "../../db";
import { useLiveQuery } from "dexie-react-hooks";

export const NavBar: FC<{setShowAcknowledgementsModal: React.Dispatch<React.SetStateAction<boolean>>}> = ({setShowAcknowledgementsModal}) => {
  const notes = useLiveQuery(() => db.notes.toArray());

  async function addNote() {
    try {
      const noteContent: string = "";
      const starred: boolean = false;
      const x: number = 0;
      const y: number = 0;
      const w: number = 250;
      const h: number = 200;
      const z: number = 1;
      const color: string = "rgba(103,198,192, 0.6)";

      await db.notes.add({
        noteContent,
        starred,
        color,
        x,
        y,
        w,
        h,
        z,
      });
    } catch (error: unknown) {
      console.log("Encountered an error: ", error);
    }
  }

  const clearNotesDB = () => {
    db.notes.clear();
  }

  return (
    <Flex bg="white" p="4" alignItems="center" width="100%" h="12">
      <Box p="2">
        <Heading size="sm" color="teal">
          NoteNest
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mx="2" onClick={addNote}>
          <AddIcon fontSize="10px" />
          <Box paddingLeft="10px" fontSize="13px">
            Add Note
          </Box>
        </Button>
      </Box>
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            variant="outline"
            color={"teal"}
            icon={<HamburgerIcon mx={2} />}
            fontSize={"12px"}
            h={"36px"}
            sx={{
              marginRight: 0,
              borderLeftRadius: "none",
              borderBottomRadius: "none",
            }}
          />
          <MenuList
            minW={"150px"}
            fontSize={"14px"}
            sx={{ zIndex: "10", opacity: "100%" }}
          >
            <MenuItem icon={<QuestionIcon color={"grey"} />} onClick={() => window.open("www.github.com")}>
              About this project
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon color={"grey"} />} onClick={() => window.open("https://www.jan-bock.dev/")}>
              Who made this!?
            </MenuItem>
            <MenuItem icon={<AtSignIcon color={"grey"} />} onClick={() => setShowAcknowledgementsModal(true)}>
              Acknowledgements
            </MenuItem>
            <MenuItem icon={<DeleteIcon color={"red"} />} onClick={() => clearNotesDB()} hidden={notes?.length === 0}> 
              Delete All Notes
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
