import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = (props) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('0');
  
  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
    props.onValueChanged(props.pos, value);
  };

  return (
    <div className="ml-2 mr-2">
      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">{props.label}</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={selectedValue}
          onChange={handleChange}
        >
          {props.items.map((item, index) => (
            <MenuItem key={index} value={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleSelect;
