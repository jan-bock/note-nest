import { FC, useEffect, useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import {
  Box,
  Textarea,
  IconButton,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  HamburgerIcon,
  StarIcon,
} from "@chakra-ui/icons";
import { db } from "../../../db";
import { useLiveQuery } from "dexie-react-hooks";
import {
  NoteType,
  deleteNote,
  getNoteHeaderColor,
  onChange,
  onColorClick,
  onMouseDown,
  onStarClick,
} from "./noteUtils";

export const Note: FC<NoteType> = ({
  noteContent,
  starred,
  color,
  id,
  x,
  y,
  w,
  h,
  z,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  let maxZNote = useLiveQuery(() => db.notes.orderBy("z").last());

  if (!id) return null;

  const [notePosition, setNotePosition] = useState({
    x: x,
    y: y,
    w: w,
    h: h,
  });

  useEffect(() => {
    db.notes.update(id, {
      x: notePosition.x,
      y: notePosition.y,
      w: notePosition.w,
      h: notePosition.h,
    });
  }, [notePosition, id]);

  // my app TODOs:
  // - top level button (About (github), Delete All Notes, creator (linkedin), acknowledgements/inspiration
  // - placeholder on load when notes is empty
  // - host on vercel!

  const onMouseUp = () => {
    const textAreaSize = textAreaRef.current?.getBoundingClientRect();
    if (textAreaSize?.width && textAreaSize?.height) {
      setNotePosition((prevState) => ({
        ...prevState,
        w: textAreaSize?.width,
        h: textAreaSize?.height,
      }));
    }
  };

  const onDrag = (_e: DraggableEvent, data: DraggableData) => {
    setNotePosition((prevState) => ({
      ...prevState,
      x: prevState.x + data.deltaX,
      y: prevState.y + data.deltaY,
    }));
  };

  return (
    <Draggable
      handle=".note-header"
      defaultPosition={{ x: 0, y: 0 }}
      position={{ x: x, y: y }}
      bounds={".notes-playground"}
      onDrag={(e, d) => onDrag(e, d)}
    >
      <Box
        zIndex={`${z}`}
        onClick={() => onMouseDown(maxZNote, id)}
        position={"absolute"}
        minH={"100px"}
        minW={"100px"}
        borderRadius={"6px"}
        backgroundColor={color}
        h="max-content"
        w="max-content"
        outline={100}
        backdropFilter={"blur(5px)"}
      >
        <Box
          className="note-header"
          h="36px"
          bg={getNoteHeaderColor(color)}
          sx={{
            borderTopRadius: "5px",
            display: "flex",
            flexDir: "row-reverse",
            cursor: "grab",
            alignItems: "center",
          }}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              color={"white"}
              icon={<HamburgerIcon />}
              fontSize={"12px"}
              variant="none"
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
              <Box
                display={"flex"}
                flexDir={"row"}
                columnGap={"5px"}
                height={"39px"}
              >
                <Box
                  onClick={() => onColorClick("rgba(103,198,192, 0.6)", id)}
                  w={"30px"}
                  h={"30px"}
                  bg={"#67c6c0"}
                  borderRadius={"50%"}
                  cursor={"pointer"}
                  marginLeft={"10px"}
                ></Box>
                <Box
                  onClick={() => onColorClick("rgba(255,249,177, 0.6)", id)}
                  w={"30px"}
                  h={"30px"}
                  bg={"#fff9b1"}
                  borderRadius={"50%"}
                  cursor={"pointer"}
                ></Box>
                <Box
                  onClick={() => onColorClick("rgba(245,209,40 , 0.6)", id)}
                  w={"30px"}
                  h={"30px"}
                  bg={"#f5d128"}
                  borderRadius={"50%"}
                  cursor={"pointer"}
                ></Box>
                <Box
                  onClick={() => onColorClick("rgba(208,225,122, 0.6)", id)}
                  w={"30px"}
                  h={"30px"}
                  bg={"#d0e17a"}
                  borderRadius={"50%"}
                  cursor={"pointer"}
                ></Box>
                <Box
                  onClick={() => onColorClick("rgba(166,204,245, 0.6)", id)}
                  w={"30px"}
                  h={"30px"}
                  bg={"#a6ccf5"}
                  borderRadius={"50%"}
                  cursor={"pointer"}
                  marginRight={"10px"}
                ></Box>
              </Box>
              <Divider />
              <MenuItem
                icon={<StarIcon color={"gold"} />}
                onClick={() => onStarClick(id, starred)}
              >
                Star
              </MenuItem>
              <MenuItem
                icon={<DeleteIcon color={"red"} />}
                onClick={() => deleteNote(id)}
              >
                Delete
              </MenuItem>
            </MenuList>
            {starred && <StarIcon fontSize={"10px"} color={"white"} />}
          </Menu>
        </Box>
        <Textarea
          ref={textAreaRef}
          onMouseUp={() => onMouseUp()}
          borderTopRadius={"0px"}
          border={"none"}
          minH={"100px"}
          minW={"100px"}
          width={w}
          height={h}
          fontSize={"14px"}
          resize={"both"}
          placeholder="Edit me by clicking here..."
          onChange={(e) => onChange(e, id)}
          value={noteContent}
        />
      </Box>
    </Draggable>
  );
};
