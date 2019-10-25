import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.generateQuote();
    }
    render() {
        return (
            <div className="Buttons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-square"></i>
                <button className="Buttons-fact" id="new-fact" onClick={this.handleClick}>New Fact</button>
            </div>
        )
    }
}

export default Buttons;