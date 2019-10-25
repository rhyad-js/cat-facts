import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {
    render() {
        return (
            <div id="quote">
                <h3 className="Quote-text">{this.props.quote}</h3>
            </div>
        )
    }
}

export default Quote;