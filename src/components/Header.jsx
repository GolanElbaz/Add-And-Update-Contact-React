import React, { Component } from 'react';
//this.props מייבא מידע ממחלקת האבא 
class Header extends React.Component {
    render() { 
        return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                
                <a href="/" className="navbar-brand"> 
                    {this.props.brand}


                </a>
            </div>
            <ul className="navbar-nav mr-auto">
                <li className="navitem">
                    <a href="/" className="nav-link" Style="color:black; font-weigth:600; margin-right:100px">Home</a>

                </li>


            </ul>



        </nav>


        );
    }
}
 
export default Header;