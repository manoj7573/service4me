import React, { Component } from 'react';
import './h_styl.css';

class Headerr extends Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#about">Queries</a>
                <h1>Services4me</h1>
                
                
            </div>
        );
        
    }
}

export default Headerr;