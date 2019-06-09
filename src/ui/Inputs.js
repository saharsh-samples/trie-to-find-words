import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LetterEntry from './LetterEntry';
import MinMax from './MinMax';

class Inputs extends React.Component {
    render() {
        return (
            <div><Card><CardContent>
                <MinMax 
                    type="min" selectedValue={this.props.selectedMin} 
                    changeHandler={this.props.minChangeHandler} 
                />
                <MinMax
                    type="max" selectedValue={this.props.selectedMax}
                    changeHandler={this.props.maxChangeHandler}
                />
                <br/>
                <LetterEntry
                    letters={this.props.letters}
                    changeHandler={this.props.letterEntryHandler}
                    disabled={this.props.letterEntryDisabled}
                />
                <br/>
                <Button onClick={this.props.resetHandler}>Reset</Button>
            </CardContent></Card></div>
        );
    }
}

export default Inputs
