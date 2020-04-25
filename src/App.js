import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import Producto from "./components/Producto";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Size from "./components/Size";
import Envios from "./components/Envios";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BlogContent from "./components/BlogContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
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
				<Route path="/nosotros" component={Nosotros} />
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

export default App;
