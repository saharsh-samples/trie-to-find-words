import React from 'react';
import ImplFactory from './impl/ImplFactory';
import Inputs from './ui/Inputs';
import Output from './ui/Output';

class App extends React.Component {

    constructor(props) {
        super(props);

        // initialize search implementation
        this.impl = ImplFactory.newImpl()

        // initialize UI state
        this.state = {
            min: 3,
            max: 6,
            letters: [],
            words: ['Enter all the letters to generate words..']
        };
    }

    handleMinMaxChange = type => event => {
        const minMaxChange = {min : this.state.min, max : this.state.max}
        minMaxChange[type] = Number(event.target.value)
        if(minMaxChange.min > minMaxChange.max) {
            console.warn(type + " cannot be changed to " + minMaxChange[type])
            return;
        }
        this.setState(minMaxChange)
        this.reset()
    }

    handleLetterEntry = event => {

        let letter = event.target.value

        if(letter.match(/[A-Z]/)) {
            letter = letter.toLowerCase()
        }

        if(! letter.match(/[a-z]/)) {
            return;
        }

        // letters
        const letters = this.state.letters
        letters.push(letter)
        this.setState({letters : letters})

        // words
        if(letters.length === this.state.max) {
            this.setState({
                words : this.impl.findWords(letters, this.state.min, this.state.max)
            })
        }
    }

    reset = () => {
        this.setState({
            letters: [],
            words: ['Enter all the letters to generate words..']
        })
    }

    render() {
        return (
            <div>
                <Inputs
                    selectedMin={this.state.min}
                    minChangeHandler={this.handleMinMaxChange("min")}
                    selectedMax={this.state.max}
                    maxChangeHandler={this.handleMinMaxChange("max")}
                    letters={this.state.letters}
                    letterEntryHandler={this.handleLetterEntry}
                    letterEntryDisabled={this.state.max === this.state.letters.length}
                    resetHandler={this.reset}
                />
                <br/>
                <Output words={this.state.words} />
            </div>
        )
    }

}

export default App
