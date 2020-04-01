import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  footer: {
    flexDirection: "column"
  },
  subMenu: {
    justifyContent: "space-evenly",
    backgroundColor: "#2B2B2B",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap"
    }
  },
  menuItem: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
  },
  link: {
    color: "#FFF",
    fontWeight: "bold",
    textDecoration: "none"
  },
  copyright: {
    backgroundColor: "#986D0B",
    justifyContent: "center"
  },
  copyrightContent: {
    textAlign: "center",
    margin: ".52rem",
    color: "#FFF"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.footer}`}>
      <div className={`${classes.root} ${classes.subMenu}`}>
        <Button className={classes.menuItem}>
          <Link className={classes.link} to="/catalogo">
            TIENDA
					</Link>
        </Button>
        <Button className={classes.menuItem}>
          <Link className={classes.link} to="/quienes_somos">
            QUIENES SOMOS
					</Link>
        </Button>
        <Button className={classes.menuItem}>
          <Link className={classes.link} to="/blog">
            BLOG
					</Link>
        </Button>
        <Button className={classes.menuItem}>
          <Link className={classes.link} to="/contacto">
            CONTACTO
					</Link>
        </Button>
        <Button className={classes.menuItem}>
          <Link className={classes.link} to="/envios">
            ENVIOS Y DEVOLUCIONES
					</Link>
        </Button>
        <Button className={classes.menuItem}>
          <Link className={classes.link} to="/size">
            TAMAÑOS Y CUIDADOS
					</Link>
        </Button>
      </div>
      <div className={`${classes.root} ${classes.copyright}`}>
        <h6
          className={classes.copyrightContent}
        >{`${new Date().getFullYear()} JOYERA CDMX TODOS LOS DERECHOS RESERVADOS`}</h6>
      </div>
    </div>
  );
}
