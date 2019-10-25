import React, { Component } from 'react';
import './QuoteBox.css';
import Quote from './Quote';
import Buttons from './Buttons';

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allQuotes: null,
            chosenQuote: null,
            randomNumber: new Set(),
        }
        this.generateQuote = this.generateQuote.bind(this);
    }
    async componentDidMount() {
        const url = 'https://catfact.ninja/facts?limit=500&max_length=100';
        const response = await fetch(url);
        const data = await response.json();
        const randIndex = Math.floor(Math.random()*data.data.length);
        this.setState({
            allQuotes: data.data,
            chosenQuote: data.data[randIndex].fact
        });
    }
    generateQuote() {
        let randIndex;
        do {
            randIndex = Math.floor(Math.random()*this.state.allQuotes.length);
        } while (this.state.randomNumber.has(randIndex));
        this.setState(st => ({
            randomNumber: st.randomNumber.add(randIndex),
            chosenQuote: this.state.allQuotes[randIndex].fact
        }));
    }
    render() {
        return (
            <div id="quote-box">
                <Quote allQuotes={this.state.allQuotes} quote={this.state.chosenQuote} />
                <Buttons generateQuote={this.generateQuote} />
            </div>
        )
    }
}

export default QuoteBox;