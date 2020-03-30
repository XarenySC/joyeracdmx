import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Grid from "@material-ui/core/Grid";
import { getProductoById } from "../utils/ContentfulApi";
import Spinner from "./Spinner";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginBottom: theme.spacing(2)
	},
	media: {
		height: "50vh"
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

export default function Producto(props) {
	const classes = useStyles();
	const [producto, setProducto] = useState({ data: {}, loading: true });

	useEffect(() => {
		getProductoById(props.match.params.id).then(data => {
			setProducto({ data, loading: false });
		});
	}, [props.match.params.id]);

	return (
		<div className={classes.root}>
			{producto.loading ? (
				<Spinner />
			) : (
				<div>
					<div className={classes.center}>
						<h2 className={classes.header}>{producto.data.nombre}</h2>
					</div>
					<div className={classes.center}>
						<img
							className={classes.media}
							src={producto.data.imagen}
							alt={producto.data.nombre}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
