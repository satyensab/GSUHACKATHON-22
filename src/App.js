import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';


const App = () => {
  const [notes, setNotes] = useState([
      {
        id: nanoid(),
        text: "This is my first note",
        date: "3/19/2022",
      },
      {
        id: nanoid(),
        text: "This is my second note",
        date: "3/20/2022",
      },
      {
        id: nanoid(),
        text: "This is my third note",
        date: "3/21/2022",
      },
      {
        id: nanoid(),
        text: "This is my new note",
        date: "3/21/2022",
      },
  ]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
     const date = new Date();
     const newNote = {
       id: nanoid(),
       text: text,
       date: date.toLocaleDateString()
     }
     const newNotes = [...notes, newNote];
     setNotes(newNotes)
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes)
  };


  return (
      <div className ="container">
        <h1>List/Notes</h1>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => 
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote= {addNote}
          handleDeleteNote = {deleteNote}
         />
      </div>
  );
};

export default App;