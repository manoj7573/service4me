import React, { Component } from 'react';
import './style.css'
import axios from 'axios';

class spnt extends Component {
    

     constructor(props) {
        super(props)
        this.state = {
            itemname: '',
            amount: ''
        }
     }
     
     submithandler = (e) => {
        //e.preventDefault();
        console.log('the value is');
        console.log(this.state.itemname);
        const spentdata = {
            itemname: this.state.itemname,
            amount: this.state.amount
        };  
        axios({
            url: '/api/spent',
            method: 'POST',
            data: spentdata
        })
        .then(response => {
            console.log(response, 'good');
            this.resetUserInputs();
        })
        .catch(error => {
            console.log(error, 'bad')
        });;
     };
      
     changeHandeler = (e) => {
        this.setState({[e.target.name]: e.target.value})
     };

     resetUserInputs = () => {
         console.log('the value is reset')
         this.setState({
            itemname: '',
             amount: ''
         });
     };

    render() {
        //const {userid} = this.state
        return (
            <div>
                <h1>Spent:</h1>
                <form onSubmit={this.submithandler}>
                    <div>
                        <input type="text" name="itemname" placeholder="Enter Item" vaue={this.itemname} onChange={this.changeHandeler}></input>
                        <br />
                        <input type="text" name="amount" placeholder="Enter Amount" vaue={this.amount} onChange={this.changeHandeler}></input>
                    </div>
                <button onClick={this.submithandler.bind(this)}>Submit</button>
                </form>
            </div>
        );
        
    }
}

export default spnt;