import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { TextField, Box, Card, CardContent, Typography } from "@mui/material";

const SearchNotes: React.FC = () => {
  const { notes } = useNotes();
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ mt: 3 }}>
      <TextField
        fullWidth
        label="Search notes..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        margin="normal"
      />
      {filteredNotes.map((note) => (
        <Card key={note.id} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {note.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {note.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SearchNotes;
