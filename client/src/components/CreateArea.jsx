import {React,useState} from "react";

function CreateArea(props) {
  const[title,setTitle] = useState("");
  const[text,setText] = useState("");
  return (
    <div>
      <form>
        <input name="title" onChange={(event)=>{setTitle(event.target.value)}} value={title}placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={(event)=>{setText(event.target.value)}} value={text}/>
        <button onClick={(event)=>{
          if(title.length!=0 && text.length!=0)  props.addNote(title,text); 
          event.preventDefault();
          setTitle(""); 
          setText("");
          }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
