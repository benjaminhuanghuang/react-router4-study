import React, { Component } from 'react';

export default class Submit extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    submitRecipe()
    {
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <h1>Submit page</h1>
                <button onClick={this.submitRecipe.bind(this)}>Submit</button>
            </div>
        );
    }
}