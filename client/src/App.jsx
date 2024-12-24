import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

import axios from "axios"
function App() {
  const [Notes,setNotes] = useState([]);
  const fetchNotes = async ()=>{
    console.log("Hey")
    try{
      const response = await axios.get("https://noter-app-server.vercel.app/api");
      setNotes(response.data);
    }catch(err){
      console.error('Error fetching Notes:',err);
    }
  }
  useEffect(()=>{
    fetchNotes();
  },[]);


  const addNote = async (newNoteTitle,newNoteText)=>{
    const newNote = {title:newNoteTitle,text:newNoteText,id:Notes.length}
    try{
      const res = await axios.post("https://noter-app-server.vercel.app/api",newNote);
      console.log("Now work bro pls");
      await fetchNotes();
    }catch(err){
        console.error("Err: ",err);
    }
  }
  const deleteNote = async (key)=>{
    try{
      const response = await axios.delete("https://noter-app-server.vercel.app/api",{data: {key}});
      console.log("Delete also work bro pls");
      await fetchNotes();
    }catch(err){
      console.error("Error deleting notes");
    }
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {Notes.map((note,index) => {
        return <Note key={index} val={note.id} title={note.title} content={note.text} deleteNote={deleteNote}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
