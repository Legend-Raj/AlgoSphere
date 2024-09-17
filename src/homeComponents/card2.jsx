import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import IconButton from '@material-ui/core/IconButton';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 350,
    maxWidth: 350,
    borderRadius: 10, // Rounded edges
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Softer shadow
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)', 
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
    },
  },
  media: {
    height: 150,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  actionArea: {
    padding: 15,
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  header: {
    backgroundColor: '#f5f5f5',
  },
  content: {
    backgroundColor: '#f5f5f5',
  },
}));

export default function ImgMediaCard2(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <Link to={props.card.route}>
          <CardMedia
            component="img"
            alt={props.card.title}
            className={classes.media}
            src={props.card.img}
          />
        </Link>
        <CardHeader
          title={props.card.title}
          className={classes.header}
          action={
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.content}>
            <Typography>
              {props.card.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </CardActionArea>
  );
}
