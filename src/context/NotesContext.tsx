import React, { createContext, useContext, useState } from "react";

export interface Note {
  id: string;
  title: string;
  content: string;
}

interface NotesContextType {
  notes: Note[];
  addNote: (title: string, content: string) => void;
  editNote: (id: string, title: string, content: string) => void;
  deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (title: string, content: string) => {
    const newNote: Note = { id: crypto.randomUUID(), title, content };
    setNotes((prev) => [...prev, newNote]);
  };

  const editNote = (id: string, title: string, content: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, title, content } : note))
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotes must be used within a NotesProvider");
  return context;
};
