import React, { Component } from 'react';

class Subscription extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor',
            count: 0
        }
    }



    changeMessage(){
        this.setState({
            message: 'Thank you for Subscribing',
            count: this.state.count + 1
        }, () => {
            console.log("Total Visitors: ", this.state.count)
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <h4>Total number of Visitors: {this.state.count}</h4>
                <button onClick={() => {this.changeMessage()}}>Subscribe</button>
            </div>
        )
    }
}

export default Subscription