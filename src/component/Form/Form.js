import React from 'react'

function Form() {

  function getFormData(e)
   {
    e.preventDefault()
  }
                 
                    return (
                    <div>
                      <h1>Handeal Form in react</h1>
                   <form onSubmit={getFormData}>
                     <input type="text" placeholder="Enter Name" required></input><br/>
                     <input type="text" placeholder="Enter Name" required></input> 
                                        <select >
                       <option>Select Option</option>
                       <option>Shubham</option>
                       <option>Lucky</option>
                       <option>Rishab</option>
                       <option>Arun</option>
                     </select><br/><br/>
                     <input type="checkbox" required /><span>Accept Term & Conditions</span>
                     <button type="Submit"> Submit</button>
                   </form>
      
                   </div>
  );


}
export default Form;



