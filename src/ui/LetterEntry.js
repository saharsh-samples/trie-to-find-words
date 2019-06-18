import React from 'react';
import TextField from '@material-ui/core/TextField';

class LetterEntry extends React.Component {

    render() {

        let letters = "";
        this.props.letters.forEach(letter => {
            letters = letters + letter + " "
        })

        return(
            <TextField
                id="letter-entry"
                helperText={this.props.disabled ? null : letters}
                value=""
                onChange={this.props.changeHandler}
                placeholder={this.props.disabled ? letters : "Enter letters..."}
                disabled={this.props.disabled}
                margin="normal"
            />
        );
    }
}

export default LetterEntry