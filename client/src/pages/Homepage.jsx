import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";

import axios from "axios"
function HomePage() {
  const [Notes,setNotes] = useState([]);
  const fetchNotes = async ()=>{
    try{
      console.log("Fetching Notes of the user");
      const response = await axios.get("http://localhost:3000/api",{withCredentials:true});
      console.log("notes aval :- ",response.data);
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
      const res = await axios.post("http://localhost:3000/api",newNote,{withCredentials:true});
      console.log("Now work bro pls");
      await fetchNotes();
    }catch(err){
        console.error("Err: ",err);
    }
  }
  const deleteNote = async (key)=>{
    try{
      console.log(key);
      const response = await axios.delete("http://localhost:3000/api",{data: {key}},{withCredentials:true});
      console.log("Delete also work bro pls");
      await fetchNotes();
    }catch(err){
      console.error("Error deleting notes");
    }
  }
  const  makeAPICall= async()=>{
    console.log("API CALLED");
    try{
    await axios.get("http://localhost:3000/check",{withCredentials:true});
    }catch(err){
      console.error(err); 
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

export default HomePage;