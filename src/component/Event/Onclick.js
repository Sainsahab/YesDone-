// import { Alert } from "bootstrap";
import { data } from "jquery";
import React from "react";
function Onclick() {


    function apple()
     {

        alert("Submit From");
        
    }

    function myFunction() {
        alert("Your file is being uploaded!");
    }

    function SUB()
     {
       
        
        alert("Hello shubham");
    }
    
   return(
       <>
       <h1>Yes  !</h1>
       <button onClick={() =>apple()}>Submit</button>


       <button onClick={() =>myFunction()
       }>Upload</button>


       <button onClick={()=>SUB()
    }>Hello</button>


    <button onClick={SUB}>button</button>
    <button onClick={myFunction}> Submit</button>

    <button onClick={()=>alert("Hello Bro")}>Hello</button>

              </>
   ) 
}

export default Onclick;