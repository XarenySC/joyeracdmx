import React from "react";
import Carrusel from "./Carrusel";
import MasVendidos from "./MasVendidos";
import { makeStyles } from "@material-ui/core/styles";
import InstagramFeed from "./InstagramFeed";


const useStyles = makeStyles(theme => ({
	container: {
		flexGrow: 1,
		paddingTop: "5.30rem",
		display: "flex",
		flexDirection: "column"
	},
	root: {
		flexGrow: 1,
		marginBottom: theme.spacing(2)
	}
}));

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Carrusel />
			<MasVendidos />
			<InstagramFeed/>
		</div>
	);
}
