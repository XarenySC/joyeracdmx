import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Tarjeta from "./Tarjeta";
import Spinner from "./Spinner";
import {
	getAllEntriesByType,
	getAllProductosByTipo,
	getAllProductosByColeccion
} from "../utils/ContentfulApi";

const useStyles = makeStyles(theme => ({
	container:{
		flexGrow: 1,
		paddingTop: "7rem",
		display: "flex"
	},
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

export default function Catalogo(props) {
	const classes = useStyles();
	const [catalogoData, setCatalogo] = useState({
		productos: [],
		loading: true
	});

	useEffect(() => {
		if (props.match.params.id) {
			if (props.helper === "coleccion") {
				getAllProductosByColeccion(props.match.params.id).then(entries => {
					setCatalogo({ productos: entries, loading: false });
				});
			} else {
				getAllProductosByTipo(props.match.params.id).then(entries => {
					setCatalogo({ productos: entries, loading: false });
				});
			}
		} else {
			getAllEntriesByType("producto").then(entries => {
				setCatalogo({ productos: entries, loading: false });
			});
		}
	}, [props.match.params.id, props.helper]);

	return (
		<Container className={classes.container}>
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
		</Container>
	);
}
