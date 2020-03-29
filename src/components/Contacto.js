import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Mapa from "./Mapa";

const useStyle = makeStyles(theme => ({
	root: {
		marginBottom: theme.spacing(2),
		display: "flex",
		flexDirection: "column"
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
	},
	grow: {
		flexGrow: 1
	},
	align: {
		alignItems: "center"
	},
	noMargin: {
		marginTop: 0
	},
	justify: {
		textAlign: "justify",
		padding: theme.spacing(2)
	},
	noDeco: {
		listStyle: "none"
	}
}));

export default function Contacto() {
	const classes = useStyle();
	return (
		<div className={`${classes.root} ${classes.grow}`}>
			<div className={classes.center}>
				<h2 className={classes.header}>Contacto</h2>
				<p className={classes.noMargin}>VISITANOS EN NUESTRAS TIENDAS</p>
			</div>
			<Grid
				container
				className={`${classes.center} ${classes.grow} ${classes.align}`}
			>
				<Grid item xs={12} sm={6} className={classes.justify}>
					<p>
						Calle de la Palma 5, Centro Histórico de la Cdad. de México, Centro,
						Cuauhtémoc, 06000 Ciudad de México, CDMX
					</p>
					<p>HORARIO</p>
					<ul className={classes.noDeco}>
						<li>Mon. - Fri. 8am - 8pm</li>
						<li>Saturday. 9am - 7pm</li>
						<li>Sunday. 9am - 8pm</li>
					</ul>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Mapa
						direccion={
							"Calle de la Palma 5, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX"
						}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
