import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/container";
import Navbar from "./components/Navbar";
import Catalogo from "./components/Catalogo";
import Footer from "./components/Footer";

const useStyles = makeStyles(theme => ({
	main: {
		minHeight: "100vh"
	},
	root: {
		flexGrow: 1,
		paddingTop: "5rem"
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

function App() {
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<Navbar />
			<Container className={classes.root}>
				<div className={classes.center}>
					<h2 className={classes.header}>CATALOGO</h2>
				</div>
				<Catalogo />
			</Container>
			<Footer/>
		</div>
	);
}

export default App;
