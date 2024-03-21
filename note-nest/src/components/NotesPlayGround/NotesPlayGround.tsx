import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Note } from "./child_components/Note";

export const NotesPlayGround: FC<{}> = () => {

    return (
        <Box bg={"#F6FAFA"} display={"block"} h="100vh" padding={"10px"} className="notes-playground">
            <Note />
        </Box>
    );
};
