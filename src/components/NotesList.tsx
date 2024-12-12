import React from "react";
import { useNotes } from "../context/NotesContext";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteNoteButton from "./DeleteNoteButton";
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

const NotesList: React.FC = () => {
  const { notes } = useNotes();

  return (
    <Box>
      {notes.map((note) => (
        <Card key={note.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{note.title}</Typography>
            {/* Displaying content with line breaks and wrapping */}
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                whiteSpace: "pre-line", // Preserve line breaks
                wordWrap: "break-word", // Allow long words to break and wrap
              }}
            >
              {note.content}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 1 }}>
              <Link to={`/edit/${note.id}`}>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
              <DeleteNoteButton noteId={note.id} />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default NotesList;
