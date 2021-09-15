import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/navbar/Nav';
import Slide from './component/slider/Slide';
import Serch from './component/img/Serch';
// import { Form } from 'react-bootstrap';
// import Form  from './component/Form/Form';
// import Profile from './component/Form/Profile';
// import Button from './component/Form/Button';
// import { Button } from 'bootstrap';

function App() {

//   function hii(){
//     alert("This is functionl button");
//   }
//   const[data,setData]=useState(0)
 
//  function UpdateData() {

//   setData(data+1)

//   }

  
  return (

    <div className="App">
     <Nav/>

      <Slide/> 
    <Serch/> 
     {/* <Form/> */}
     {/* <Profile/> */}
     {/* <Button/> */}
     
{/* 
     <button onClick={hii}>Click me</button>
     <button onClick={()=>alert("This is inline jsx code")}>Click me</button>

     <h1 >{data} </h1>
     <button onClick={UpdateData}>Incre</button>

      */}

    
    </div>






    );
}






export default App; 

