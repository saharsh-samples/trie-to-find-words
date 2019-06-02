import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

class MinMax extends React.Component {
    render() {
        const options = []
        for(let i = 2; i <= 10; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return (
            <FormControl>
                <InputLabel shrink htmlFor={this.props.type}>
                    {this.props.type}
                </InputLabel>
                <NativeSelect
                    value={this.props.selectedValue}
                    onChange={this.props.changeHandler}
                    input={<Input name={this.props.type} id={this.props.type} />}
                >
                    {options}
                </NativeSelect>
            </FormControl>
        );
    }
}

export default MinMax
