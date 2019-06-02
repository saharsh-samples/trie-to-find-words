import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Output extends React.Component {
    render() {
        const words = []
        this.props.words.forEach(word => {
            words.push(<Typography key={words.length}>{word}</Typography>);
        });
        return(
            <Card>
                <CardContent>
                    {words}
                </CardContent>
            </Card>
        )
    }
}

export default Output
