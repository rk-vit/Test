import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [Notes,setNotes] = useState([]);
  const addNote = (newNoteTitle,newNoteText)=>{
    const newNote = {title:newNoteTitle,text:newNoteText}
    setNotes((prevValue)=>{
      return [...prevValue,newNote]
    })
  }
  const deleteNote = (key)=>{
    setNotes((prevValue)=>{
      return prevValue.filter((item,index)=>{
        return index!==key;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {Notes.map((note,index) => {
        return <Note key={index} val={index} title={note.title} content={note.text} deleteNote={deleteNote}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
