import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
	container: {
		width: "100%"
	},
	mapa: {
		width: "100%",
		height: "300px"
	}
}));

export default function Mapa(props) {
	const classes = useStyle();
	return (
		<div className={classes.container}>
			<iframe
				id="mapa"
				title="Direccion sucursal"
				className={classes.mapa}
				src={`https://maps.google.com/maps?q=${props.direccion}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
			></iframe>
		</div>
	);
}
