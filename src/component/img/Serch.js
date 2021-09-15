import React, { Component } from 'react';
class Serch extends Component {

    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api/',
        apikey:'22588921-cbd7ec8b4efd828b354c5d72b',
        images:[]
    };

    onTextChange=e=>{
        this.setState({[e.target.name]:e.target.value}); 
    }
render(){    return (
        <div>
            <input type="text"  
            style={{
                backgroundColor:'black',
                color:'White',
                marginleft:570,
                marginTop:100,
                paddingTop:20,
                paddingleft:70,
                fontSize:30,
                borderTopStyle:"hidden",
                borderLeftStyle:"hidden",
                borderRightStyle:"hidden",
                outline:"none",
                borderBottomStyle:'groove',
            }}
            
            
            placeholder="Search for images "
            
            name="serchText" 
            value={this.state.searchText}
            onChange={this.onTextChange}/>
        </div>
    )
}
}

export default Serch;
