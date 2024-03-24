// db.ts
import Dexie, { Table } from "dexie";

export interface NoteType {
  id?: number;
  noteContent: string;
  starred: boolean;
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
}

export class MySubClassedDexie extends Dexie {
  notes!: Table<NoteType>;

  constructor() {
    super("NoteNestDB");
    this.version(1).stores({
      notes: "++id, noteContent, starred, color, x, y, w, h, z",
    });
  }
}

export const db = new MySubClassedDexie();
