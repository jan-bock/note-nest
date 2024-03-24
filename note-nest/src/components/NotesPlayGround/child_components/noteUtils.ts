import { db } from "../../../db";

export interface NoteType {
  noteContent: string;
  starred: boolean;
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  id?: number;
}

export const onChange = async (
  event: React.ChangeEvent<HTMLTextAreaElement>,
  id: number | undefined
) => {
  id &&
    (await db.notes.update(id, {
      noteContent: event.target.value,
    }));
};

export const deleteNote = (id: number | undefined) => id && db.notes.delete(id);

export const onMouseDown = async (
  maxZNote: NoteType | undefined,
  id: number | undefined
) => {
  maxZNote &&
    id &&
    (await db.notes.update(id, {
      z: maxZNote.z + 1,
    }));
};

export const onStarClick = (id: number | undefined, starred: boolean) => {
  id &&
    db.notes.update(id, {
      starred: !starred,
    });
};

export const onColorClick = (color: string, id: number | undefined) => {
  id &&
    db.notes.update(id, {
      color: color,
    });
};

export const getNoteHeaderColor = (color: string) => {
  switch (color) {
    case "rgba(103,198,192, 0.6)":
      return "#4EB7B0";
    case "rgba(255,249,177, 0.6)":
      return "#E5D832";
    case "rgba(245,209,40 , 0.6)":
      return "#ECC406";
    case "rgba(208,225,122, 0.6)":
      return "#BACF51";
    case "rgba(166,204,245, 0.6)":
      return "#6097D3";
  }
};
