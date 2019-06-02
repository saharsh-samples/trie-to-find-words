import React from 'react';
import Button from '@material-ui/core/Button';
import LetterEntry from './LetterEntry';
import MinMax from './MinMax';

class Inputs extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Inputs
