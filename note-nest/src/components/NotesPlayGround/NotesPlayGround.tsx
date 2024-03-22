import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Note, NoteType } from "./child_components/Note";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

export const NotesPlayGround: FC<{}> = () => {
  const notes = useLiveQuery(() => db.notes.toArray());

  const renderNotes = () => {
    return notes?.map((note: NoteType) =>
      <Note key={note.id} noteContent={note.noteContent} starred={note.starred} id={note.id} x={note.x} y={note.y} />)
  }

  return (
    <Box bg={"#F6FAFA"} display={"block"} h="100vh" padding={"10px"} className="notes-playground">
      {renderNotes()}
    </Box>
  );
};
