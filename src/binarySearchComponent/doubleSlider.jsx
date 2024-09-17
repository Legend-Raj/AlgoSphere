import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

const CSlider = withStyles({
  root: {
    color: "#3f51b5", // Updated color to be dynamic
    height: 6,
    padding: "13px 0",
  },
  track: {
    height: 6,
    borderRadius: 2,
  },
  rail: {
    height: 6,
    borderRadius: 2,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
})(Slider);

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([props.lower, props.upper]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };

  useEffect(() => {
    setValue([props.lower, props.upper]);
  }, [props.lower, props.upper]);

  return (
    <div className={classes.root}>
      <CSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        max={props.max}
      />
      <Typography id="range-slider" gutterBottom>
        {props.title || 'Binary Search'}
      </Typography>
    </div>
  );
}

RangeSlider.propTypes = {
  lower: PropTypes.number.isRequired,
  upper: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
};
