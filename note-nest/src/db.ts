// db.ts
import Dexie, { Table } from 'dexie';

export interface Note {
  id?: number;
  noteContent: string;
  starred: boolean;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  notes!: Table<Note>;

  constructor() {
    super('NoteNestDB');
    this.version(1).stores({
      notes: '++id, noteContent, starred' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();