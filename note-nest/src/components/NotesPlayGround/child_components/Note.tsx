import { FC } from "react";
import Draggable from 'react-draggable';
import { Box, Textarea, IconButton, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react'
import { CopyIcon, DeleteIcon, HamburgerIcon, StarIcon } from "@chakra-ui/icons";

export interface NoteType {
    noteContent: string;
    starred: boolean;
}

export const Note: FC<NoteType> = ({ noteContent, starred }) => {
    return (
        <>
            <Draggable
                handle=".note-header"
                defaultPosition={{ x: 0, y: 0 }}
                grid={[50, 50]}
                bounds={".notes-playground"}
            >
                <Box minH={"100px"} minW={"100px"} h="max-content" w="max-content" outline={100} bg={"#67c6c0"} sx={{ borderRadius: "5px" }}
                >
                    <Box className="note-header" h="36px" bg="#5EB5AF" sx={{ borderTopRadius: "5px", display: "flex", flexDir: "row-reverse" }}>
                        <Menu >
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                color={"white"}
                                icon={<HamburgerIcon />}
                                fontSize={"12px"}
                                variant='none'
                                h={"36px"}
                                sx={{ _hover: { opacity: "20%" }, marginRight: 0, borderLeftRadius: "none", borderBottomRadius: "none" }}
                            />
                            <MenuList minW={"150px"} fontSize={"14px"}>
                                <MenuItem icon={<StarIcon />}>
                                    Star
                                </MenuItem>
                                <MenuItem icon={<CopyIcon />}>
                                    Duplicate
                                </MenuItem>
                                <MenuItem icon={<DeleteIcon />}>
                                    Delete
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Textarea border={"none"} minH={"100px"} minW={"100px"} fontSize={"14px"} resize={"both"} placeholder="Edit me by clicking here..." content={noteContent} />
                </Box>
            </Draggable>
        </>
    );
};


// future colour options:s
// - Yellow: #fff9b1 // - White: #f5f6f8 // - Light Orange: #f5d128 // - Olive: #d0e17a // - Green: #d5f692 // - Pastel Blue: #a6ccf5 // - Aqua:#67c6c0 // - Blue: #23bfe7 // - Orange: #ff9d48 // - Pink: #ea94bb // - Red: #f16c7f // - Purple: #b384bb