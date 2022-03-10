import React, { Component } from 'react';
class Contact extends React.Component {
    state ={
        showInfo:false
    }
    onShowClick=()=>{
       // this.state.showInfo=!this.state.showInfo
        this.setState({showInfo:!this.state.showInfo})

    }
    
    render() { 
        return (
            <div className='card card-body mb-3'>
               <h3> {this.props.name}
               <span Style="cursor:pointer;" 
                   onClick={()=>this.onShowClick()}>
                   {
                    this.state.showInfo?(<span>&#9195;</span>)
                    :(<span>&#9196;</span>)
                   }
                
                </span>
                <span  onClick={()=>this.props.onDelete(this.props.id)} 
                    Style="curcos:pointer; float:right">&#10060;</span>


                <span  onClick={()=>this.props.onChange(this.props.id)} 
                    Style="curcos:pointer; float:right">&#9998;</span>
                
                
                </h3>
            { this.state.showInfo?( 
               <ul className="list-group">
                   <li  className="list-group-item">&#128231; : {this.props.email}</li>
                   <li className="list-group-item">	&#9742; : {this.props.phone}</li>
               </ul>):null
            }
               
            </div>
        );
    }
}
 
export default Contact;