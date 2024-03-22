// db.ts
import Dexie, { Table } from 'dexie';

export interface NoteType {
  id?: number;
  noteContent: string;
  starred: boolean;
  x: number;
  y: number;
}

export class MySubClassedDexie extends Dexie {
  notes!: Table<NoteType>;

  constructor() {
    super('NoteNestDB');
    this.version(1).stores({
      notes: '++id, noteContent, starred' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();