import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexGrow: 1
	},
	footer: {
		flexDirection: "column"
	},
	subMenu: {
		justifyContent: "space-evenly",
		backgroundColor: "#2B2B2B",
		[theme.breakpoints.down("md")]: {
			display: "none"
		}
	},
	menuItem: {
		color: "#FFF",
		fontWeight: "bold"
	},
	copyright: {
		backgroundColor: "#986D0B",
		justifyContent: "center"
	},
	copyrightContent: {
		textAlign: "center",
		margin: ".52rem",
		color: "#FFF"
	}
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<div className={`${classes.root} ${classes.footer}`}>
			<div className={`${classes.root} ${classes.subMenu}`}>
				<Button className={classes.menuItem}>TIENDA</Button>
				<Button className={classes.menuItem}>QUIENES SOMOS</Button>
				<Button className={classes.menuItem}>FAQ</Button>
				<Button className={classes.menuItem}>CONTACTO</Button>
				<Button className={classes.menuItem}>ENVIOS Y DEVOLUCIONES</Button>
				<Button className={classes.menuItem}>POLITICAS</Button>
			</div>
			<div className={`${classes.root} ${classes.copyright}`}>
				<h6
					className={classes.copyrightContent}
				>{`${new Date().getFullYear()} JOYERA CDMX TODOS LOS DERECHOS RESERVADOS`}</h6>
			</div>
		</div>
	);
}
