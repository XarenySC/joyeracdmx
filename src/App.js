import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/container";
import Navbar from "./components/Navbar";
import Catalogo from "./components/Catalogo";
import Producto from "./components/Producto";
import Quienes from "./components/Quienes";
import Contacto from "./components/Contacto";
import Size from "./components/Size";
import Envios from "./components/Envios";
import Footer from "./components/Footer";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import dotenv from "dotenv";

dotenv.config();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "7rem",
    display: "flex"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Navbar />
      <Container className={classes.root}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/catalogo" exact component={Catalogo} />
          <Route path="/catalogo/:id" component={Producto} />
          <Route path="/quienes_somos" component={Quienes} />
          <Route path="/size" component={Size} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/envios" component={Envios} />

        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

function Index() {
  return <h2>Index</h2>;
}


export default App;
