import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%', 
      maxWidth: '400px',
    },
  },
  input: {
    borderRadius: '25px', // Rounded corners
    backgroundColor: '#f5f5f5', // Light background color
    padding: '10px', // Add padding for better spacing
    '&:focus': {
      backgroundColor: '#fff', // Background color change on focus
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow on focus
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        InputProps={{
          className: classes.input,
        }}
      />
    </form>
  );
}
