import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/container";
import Navbar from "./components/Navbar";
import Catalogo from "./components/Catalogo";
import Producto from "./components/Producto";
import Quienes from "./components/Quienes";
import Contacto from "./components/Contacto";
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
					<Route path="/faq" component={FAQ} />
					<Route path="/contacto" component={Contacto} />
					<Route path="/envios" component={Envios} />
					<Route path="/politicas" component={Politicas} />
				</Switch>
			</Container>
			<Footer />
		</Router>
	);
}

function Index() {
	return <h2>Index</h2>;
}

function FAQ() {
	return <h2>FAQ</h2>;
}

function Envios() {
	return <h2>Envios y devoluciones</h2>;
}

function Politicas() {
	return <h2>Politicas</h2>;
}

export default App;
