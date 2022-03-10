import React, { Component } from 'react';
import './AddContact.css';
class AddContact extends React.Component {
    render() { 
        return <div id="AddContact">
            <form>
        <label>Name:<input type ="text" name ="new_name" 
                                        value={this.props.name}
                                       onChange={this.props.onChangeText}
                                       
                                       />
        </label>

        <label>Email:<input type ="text" name ="new_email" 
                                         value={this.props.email}
                                         onChange={this.props.onChangeText}
                                         pattern="\w+(.\w+)@\w+(.\w+)\.([a-zA-Z]{2,3})"
                                         required
                                         />
                                         
        </label>

        <label>Phone:<input type ="text" name ="new_phone" 
        value={this.props.phone}
        onChange={this.props.onChangeText}/>
        </label>


        <input type="button" value="ADD" onClick={this.props.addButton}/>


        </form>

        

        </div>;
    }
}
 
export default AddContact;