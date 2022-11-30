//To-Do List Website with APIs
//CPSC 3720
//Made by: John Mathews, 

//import statements
import React, {useState} from "react"
import "./App.css"

//App(): main function for project
function App(props) {

  //variables

  //functions

  return (

    //This div block contains general front end 
    <div className = "todo">

      {/* header for the wesite */}
      <h1>Advanced To-Do List!</h1>

      {/*this will catch user input when properly implemented */}
      <form>
        <input type = "text" id = "newInput" className = "input input__lg" name = "text" />
        <button type = "submit" className = "btn btn__lg"> Add </button>
      </form>

      {/* header for added tasks */}
      <h2> Tasks: </h2>

    </div>
  );
}

export default App;
