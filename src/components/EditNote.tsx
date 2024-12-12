import React, { useState, useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditNote: React.FC = () => {
  const { id } = useParams();
  const { notes, editNote } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const note = notes.find((note) => note.id === id);
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [id, notes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      editNote(id!, title, content);
      navigate("/");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 2 }}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Save Changes
      </Button>
    </Box>
  );
};

export default EditNote;
