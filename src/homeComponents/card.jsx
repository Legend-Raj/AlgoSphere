import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
    minWidth: 350,
    maxWidth: 350,
    minHeight: 250,
    borderRadius: 15, // Slightly rounded corners
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)', // Slight zoom on hover
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow
    },
  },
  media: {
    height: 140,
  },
  actionArea: {
    padding: 15,
  },
  content: {
    textAlign: 'center', // Center align the text
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          src={props.card.img}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.card.description}
          </Typography>
          <ExpandMore />
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
