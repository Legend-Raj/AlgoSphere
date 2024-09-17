import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
        margin: '0 10px',
    },
});

function valuetext(value) {
    return `${value}`;
}

function parseSliderValue(event) {
    const text = event.target.innerText;
    return text === "" ? null : parseInt(text, 10);
}

export default function DiscreteSlider(props) {
    const classes = useStyles();

    const handleChange = (event, value) => {
        const num = parseSliderValue(event);
        if (num !== null) {
            props.onCountChange(num);
        }
    };

    return (
        <div className={`${classes.root}`}>
            <Slider
                defaultValue={props.default || 20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChangeCommitted={handleChange}
                step={props.step || 1}
                min={props.min || 10}
                max={props.max || 100}
                valueLabelDisplay="on"
                disabled={props.disable || false}
            />
            <Typography id="discrete-slider" gutterBottom>
                {props.title || 'Slider'}
            </Typography>
        </div>
    );
}
