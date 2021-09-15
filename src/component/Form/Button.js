import React from 'react'

const Button = () => {

    const [status,setStatus]=React.useState(false)
    return (
        <div>
            {
                status?
            <h1>Online</h1>:<h1>Offline</h1>

}
            {/* <button onClick={() => setStatus(true)}>Show</button>
            <button  onClick={() => setStatus(false)}>Hide</button>
             */}
            <button  onClick={() => setStatus(!status)}>Show</button>
            

        </div>
    )
}

export default Button;


















// function Form() {

//     const[data,setData]=useState(null)
//     const[Print,setPrint]=useState(false)

//     function getdata(val)
//     {
//         setData(val.target.value)
//     }

//       return (
//       <div>
//        {/* <h1>{data}</h1> */}

//        {
//          Print?
//          <p>Learn <span>{data}</span> more about how you can get help from your Assistant. And how to open and use Google Assistant. </p>:null
//        }
//        <input type="text" onChange={getdata}/>
//        <button onClick={() =>setPrint(true)}>Print Value</button>

//      </div>
// );
