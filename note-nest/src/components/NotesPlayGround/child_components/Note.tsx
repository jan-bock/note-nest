import { FC } from "react";
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { Box, Textarea, IconButton, MenuButton, Menu, MenuList, MenuItem } from '@chakra-ui/react'
import { CopyIcon, DeleteIcon, HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { db } from "../../../db";

export interface NoteType {
    noteContent: string;
    starred: boolean;
    x: number,
    y: number,
    id?: number;
}

export const Note: FC<NoteType> = ({ noteContent, starred, id, x, y }) => {

    // const [notePosition, setNotePosition] = useState({
    //     posX: p.noteData.posX,
    //     posY: p.noteData.posY,
    //     posZ: p.noteData.posZ,
    //     posW: p.noteData.posW,
    //     posH: p.noteData.posH,
    // });

    // my app todos:
    // - remember W, H, and position (X, Y) in db; set using useState and change using useEffect for smoother
    // - on click/drag => bring forward (raise z index)
    // - style note: on hover include border, transparent/pulse, font, font colour, note colour options

    console.log(id, x, y)

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        id && db.notes.update(id, {
            "noteContent": event.target.value
        });
    }

    const deleteNote = () => id && db.notes.delete(id)

    const onDrag = (e: DraggableEvent, data: DraggableData) => {
        console.log(data)
        id && db.notes.update(id, {
            "x": data.x,
            "y": data.y
        });
    }

    return (
        <Draggable
            handle=".note-header"
            defaultPosition={{ x: 0, y: 0 }}
            position={{ x: x, y: y }}
            bounds={".notes-playground"}
            onDrag={(e, d) => onDrag(e, d)}
        >
            <Box minH={"100px"} minW={"100px"} h="max-content" w="max-content" outline={100} bg={"#67c6c0"} sx={{ borderRadius: "5px", zIndex: "1", position: "absolute" }}
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
                        <MenuList minW={"150px"} fontSize={"14px"} sx={{ zIndex: "10" }}>
                            <MenuItem icon={<StarIcon />}>
                                Star
                            </MenuItem>
                            <MenuItem icon={<CopyIcon />}>
                                Duplicate
                            </MenuItem>
                            <MenuItem icon={<DeleteIcon />} onClick={deleteNote}>
                                Delete
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Textarea border={"none"} minH={"100px"} minW={"100px"} fontSize={"14px"} resize={"both"} placeholder="Edit me by clicking here..." onChange={onChange} value={noteContent} />
            </Box>
        </Draggable>
    );
};


// future colour options:s
// - Yellow: #fff9b1 // - White: #f5f6f8 // - Light Orange: #f5d128 // - Olive: #d0e17a // - Green: #d5f692 // - Pastel Blue: #a6ccf5 // - Aqua:#67c6c0 // - Blue: #23bfe7 // - Orange: #ff9d48 // - Pink: #ea94bb // - Red: #f16c7f // - Purple: #b384bb