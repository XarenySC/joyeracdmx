import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	media: {
		height: "223.5px"
	},
	center: {
		textAlign: "center"
	},
	centerAction: {
		display: "flex",
		justifyContent: "center",
		paddingTop: 0
	},
	detalles: {
		color: "#986d0b"
	}
}));

export default function Tarjeta(props) {
	const classes = useStyles();
	return (
		<Card>
			<CardMedia
				className={classes.media}
				image={props.imagen}
				title={props.nombre}
			/>
			<CardContent className={classes.center}>
				<Typography variant="h5">{props.nombre}</Typography>
				<Typography>{`$${props.precio} MXN`}</Typography>
			</CardContent>
			<CardActions className={classes.centerAction}>
				<Link to={`/catalogo/${props.id}`}>
					<Button size="small" className={classes.detalles}>
						Más detalles
						<ArrowRightAlt />
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
