import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tarjeta from "./Tarjeta";
import Spinner from "./Spinner";
import { getAllEntries } from "../utils/ContentfulApi";

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

export default function Catalogo() {
	const classes = useStyles();
	const [catalogoData, setCatalogo] = useState({
		productos: [],
		loading: true
	});

	useEffect(() => {
		getAllEntries().then(entries => {
			setCatalogo({ productos: entries, loading: false });
		});
	}, []);

	return (
		<div className={classes.root}>
			<div className={classes.center}>
				<h2 className={classes.header}>CATALOGO</h2>
			</div>
			{catalogoData.loading ? (
				<Spinner />
			) : (
				<Grid container spacing={3}>
					{catalogoData.productos.map(item => {
						return (
							<Grid item xs={12} sm={4} key={item.sys.id}>
								<Tarjeta
									id={item.sys.id}
									nombre={item.fields.nombre}
									precio={item.fields.precio}
									imagen={item.fields.imagen.fields.file.url}
								/>
							</Grid>
						);
					})}
				</Grid>
			)}
		</div>
	);
}
