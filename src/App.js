import React from "react";
import Navbar from "./components/Navbar";
import Catalogo from "./components/Catalogo";
import Producto from "./components/Producto";
import Quienes from "./components/Quienes";
import Contacto from "./components/Contacto";
import Size from "./components/Size";
import Envios from "./components/Envios";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BlogContent from "./components/BlogContent";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import dotenv from "dotenv";
import {Carrusel} from "./components/Carrusel";
dotenv.config();

function App() {
	return (
		<Router>
			<Navbar />
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path="/catalogo" exact component={Catalogo} />
					<Route path="/catalogo/:id" component={Producto} />
					<Route
						path="/tipos/:id"
						render={props => <Catalogo {...props} helper="tipo" />}
					/>
					<Route
						path="/colecciones/:id"
						render={props => <Catalogo {...props} helper="coleccion" />}
					/>
					<Route path="/quienes_somos" component={Quienes} />
					<Route path="/size" component={Size} />
					<Route path="/contacto" component={Contacto} />
					<Route path="/blog" exact component={Blog} />
					<Route path="/blog/:id" component={BlogContent} />
					<Route path="/envios" component={Envios} />
				</Switch>
			<Footer />
		</Router>
	);
}

function Index() {
	return <Carrusel />;
}

export default App;
