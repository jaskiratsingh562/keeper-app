import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes,setNotes] = useState([]);
    
    function addNote(note){
        setNotes(prevValue => [...prevValue,note]);
    }

    function deleteNote(id){
        setNotes((prevValue) => {
            return prevValue.filter((item,index) => {
                return index !== id;
            });
        });
    }
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd ={addNote}
      />
      {notes.map((note,index) =>
      {
        return <Note {...note} key = {index} id = {index} onDelete = {deleteNote}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
