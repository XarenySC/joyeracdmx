import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getEstaticoByTitle } from "../utils/ContentfulApi";
import Spinner from "./Spinner";
import Static from "./Static";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 140
  },
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

export default function Envios() {
  const classes = useStyles();
  const [post, setPost] = useState({ data: null, loading: true });
  const title = 'Envios y Devoluciones';

  useEffect(() => {
    getEstaticoByTitle(title).then(info => {
      setPost({ data: info, loading: false })
    });
  }, []);


  return (
    <div className={classes.root}>
      {post.loading ? <Spinner /> : <Static data={post.data} />}
    </div>
  );
}


