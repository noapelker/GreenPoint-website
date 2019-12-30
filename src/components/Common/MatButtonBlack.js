import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";

const styles = {
    label: {
        textTransform: 'capitalize',
        color: '#000',
        fontWeight: 'bold',
        fontSize: '1.3em'
    },
    root: {
        marginTop: 10,
    },
};

const MatButtonBlack = ({type, onClick, backgroundColor, classes, style, children, disabled}) => {
    return (
        <Button disabled={disabled} variant="contained" color={type} onClick={onClick} style={{
            fontSize: '1em',
            ...style,
            borderRadius: 50,
            backgroundColor: backgroundColor === 'default' ? 'darkgreen' : backgroundColor
        }}
                classes={classes}>
            {children}
        </Button>
    );
};

export default withStyles(styles)(MatButtonBlack);