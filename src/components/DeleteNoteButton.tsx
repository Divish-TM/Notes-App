import React from 'react';
import { useNotes } from '../context/NotesContext';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface DeleteNoteButtonProps {
  noteId: string;
}

const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({ noteId }) => {
  const { deleteNote } = useNotes();

  return (
    <IconButton
      color="error"
      aria-label="delete"
      size="small"
      onClick={() => deleteNote(noteId)}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteNoteButton;

