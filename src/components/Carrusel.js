import React, { Component } from "react";
import "./Carrusel.css";
import { Carousel } from "react-responsive-carousel";
import { getCarruselEntries } from "../utils/ContentfulApi";
import { Link } from "react-router-dom";
import TrendingFlat from "@material-ui/icons/TrendingFlat";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
	carruselTitle: {
		fontSize: "5rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.5rem",
			color: "#FFF"
		},
		fontWeight: "bold",
		margin: 0,
		color: "#FDC500"
	},
	carruselSubtitle: {
		fontSize: "1.5rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "1rem"
		},
		margin: ".5rem 0 2.5rem 0",
		[theme.breakpoints.down("sm")]: {
			marginBottom: "1rem",
			color: "#FFF"
		},
		color: "#FDC500"
	},
	normal:{
		[theme.breakpoints.down("sm")]:{
			display:"none !important",
		},
		height:"100%"
	},
	movil:{
		[theme.breakpoints.up("md")]:{
			display:"none !important",
		},
		height:"100%"
	},
	carruselContainer:{
		display: "flex",
		flexGrow: 1,
		[theme.breakpoints.down("sm")]:{
			alignItems: "end"
		},
		justifyContent: "center",
		alignItems: "center",
	}
});

class Carrusel extends Component {
	state = {
		carrusel: [],
		loading: true
	};

	componentDidMount() {
		getCarruselEntries().then(entries => {
			return this.setState(prevState => {
				return { carrusel: entries, loading: false };
			});
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<Carousel
				showArrows
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				autoPlay
				interval={7000}
				infiniteLoop
				className="carrusel"
			>
				{this.state.carrusel.map(item => {
					return (
						<div className={classes.carruselContainer} key={item.title}>
							<img className={classes.normal} src={item.img} alt={item.title} />
							<img className={classes.movil} src={item.movil} alt={item.title} />
							<div className="legend">
								<Typography className={classes.carruselTitle}>
									{item.title}
								</Typography>
								<Typography className={classes.carruselSubtitle}>
									{item.subtitle}
								</Typography>
								<div className={classes.carruselContainer}>
									<Link
										className="carrusel-link"
										to={`/colecciones/${item.coleccion}`}
									>
										Descúbrela
										<TrendingFlat />
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Carrusel);
