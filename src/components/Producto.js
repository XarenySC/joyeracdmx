import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { getProductoById } from "../utils/ContentfulApi";
import Spinner from "./Spinner";

const useStyles = makeStyles(theme => ({
	container: {
		flexGrow: 1,
		paddingTop: "7rem",
		display: "flex"
	},
	root: {
		flexGrow: 1,
		marginBottom: theme.spacing(2),
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	media: {
		maxHeight: "50vh",
		maxWidth: "100%"
	},
	header: {
		marginTop: 0,
		display: "inline-block",
		borderBottom: "1px black solid",
		padding: "0 3rem .25rem 3rem"
	},
	center: {
		textAlign: "center"
	},
	producto: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	infoContainer: {
		display: "flex",
		flexDirection: "column",
		margin: theme.spacing(3)
	},
	noBorder: {
		borderBottom: "none",
		marginBottom: 0
	},
	info: {
		[theme.breakpoints.down("md")]: {
			textAlign: "center"
		},
		textAlign: "justify"
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
		<Container className={classes.container}>
			<div className={classes.root}>
				{producto.loading ? (
					<Spinner />
				) : (
				<div>
					<Grid container spacing={3} className={classes.producto}>
						<Grid item xs={12} md={6} className={classes.center}>
							<img
								className={classes.media}
								src={producto.data.imagen}
								alt={producto.data.nombre}
							/>
						</Grid>
						<Grid item xs={12} md={6} className={classes.center}>
							<h1 className={`${classes.header} ${classes.noBorder}`}>
								{producto.data.nombre}
							</h1>
							<div>
								<h2
									className={classes.header}
								>{`$${producto.data.precio} MXN`}</h2>
							</div>
							<div>
								<p className={classes.info}>{producto.data.descripcion}</p>
							</div>
						</Grid>
					</Grid>
				</div>
					
				)}
			</div>
		</Container>
	);
}
