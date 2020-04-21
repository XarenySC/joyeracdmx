import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { getAllProductosByMasVendido } from "../utils/ContentfulApi";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import TrendingFlat from "@material-ui/icons/TrendingFlat";

const useStyles = makeStyles(theme => ({
	container: {
		flexGrow: 1,
		display: "flex",
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4)
	},
	root: {
		flexGrow: 1
	},
	info: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},
	imagen: {
		height: "50vh",
		maxHeight: "50vh"
	},
	header: {
		marginTop: 0,
		display: "inline-block",
		borderBottom: "1px black solid",
		padding: "0 3rem .25rem 3rem"
	},
	noBorder: {
		borderBottom: "none",
		marginBottom: 0
	},
	link: {
		backgroundColor: "#000",
		color: "#FFF",
		textDecoration: "none",
		padding: "1rem",
		display: "flex"
	}
}));

export default function MasVendidos(props) {
	const classes = useStyles();

	const [data, setData] = useState({ productos: [], loading: true });

	useEffect(() => {
		getAllProductosByMasVendido().then(data => {
			setData({ productos: data, loading: false });
		});
	}, []);

	return (
		<Container className={classes.container}>
			<div className={classes.root}>
				{data.loading ? (
					<Spinner />
				) : (
					<Grid container spacing={3}>
						{data.productos.map(item => {
							return (
								<MasVendidosItem
									key={item.sys.id}
									id={item.sys.id}
									nombre={item.fields.nombre}
									precio={item.fields.precio}
									imagen={item.fields.imagen.fields.file.url}
								/>
							);
						})}
					</Grid>
				)}
			</div>
		</Container>
	);
}

const MasVendidosItem = props => {
	const classes = useStyles();

	return (
		<Container className={classes.container}>
			<Grid container>
				<Grid className={classes.info} item xs={12} sm={6}>
					<img
						className={classes.imagen}
						src={props.imagen}
						alt={props.nombre}
					/>
				</Grid>
				<Grid className={classes.info} item xs={12} sm={6}>
					<h1 className={`${classes.header} ${classes.noBorder}`}>
						{props.nombre}
					</h1>
					<div>
						<h2 className={classes.header}>{`$${props.precio} MXN`}</h2>
					</div>
					<Link className={classes.link} to={`/catalogo/${props.id}`}>
						Más detalles
						<TrendingFlat />
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};
