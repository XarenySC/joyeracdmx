import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: 0,
    display: "inline-block",
    borderBottom: "1px black solid",
    padding: "0 .5rem .25rem .5rem"
  },
  center: {
    textAlign: "center"
  }
}));

export default function Static(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.center}>
        <h2 className={classes.header}>{props.data.fields.title.toUpperCase()}</h2>
      </div>
      <Grid container className={classes.center}>
        <p>{props.data.fields.content}</p>
      </Grid>
    </div>)
}