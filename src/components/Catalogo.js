import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tarjeta from "./Tarjeta";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center"
	},
	media: {
		height: 140
	}
}));

const dummy = [
	{ nombre: "Aretes Madonna 1", precio: 1200.0 },
	{ nombre: "Aretes Madonna 2", precio: 1300.0 },
	{ nombre: "Aretes Madonna 3", precio: 1400.0 },
	{ nombre: "Aretes Madonna 4", precio: 1500.0 },
	{ nombre: "Aretes Madonna 5", precio: 1600.0 },
	{ nombre: "Aretes Madonna 6", precio: 1700.0 },
	{ nombre: "Aretes Madonna 7", precio: 1800.0 },
	{ nombre: "Aretes Madonna 8", precio: 1900.0 },
	{ nombre: "Aretes Madonna 9", precio: 2000.0 },
	{ nombre: "Aretes Madonna 10", precio: 2100.0 }
];

export default function Catalogo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{dummy.map(item => {
					return (
						<Grid item xs={12} sm={4}>
							<Tarjeta nombre={item.nombre} precio={item.precio} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}
