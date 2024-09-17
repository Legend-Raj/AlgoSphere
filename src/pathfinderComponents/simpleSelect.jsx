import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SimpleSelect = (props) => {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        props.onAlgoChanged(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>{props.label || 'Select'}</InputLabel>
                <Select
                    value={selectedValue}
                    onChange={handleChange}
                >
                    {props.items.map((item, idx) => (
                        <MenuItem key={idx} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </Select>
                {props.helperText && (
                    <FormHelperText>{props.helperText}</FormHelperText>
                )}
            </FormControl>
        </div>
    );
};

export default SimpleSelect;
