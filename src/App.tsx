import { Route, Routes } from "react-router-dom";
import { NotesProvider } from "./context/NotesContext";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import SearchNotes from "./components/SearchNotes";
import EditNote from "./components/EditNote";
import { Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <NotesProvider>
      <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Notes App
        </Typography>
        <Routes>
          <Route path="/" element={<><SearchNotes /><AddNote /><NotesList /></>} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </Container>
    </NotesProvider>
  );
};

export default App;

