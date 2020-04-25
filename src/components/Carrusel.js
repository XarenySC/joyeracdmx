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
		[theme.breakpoints.down("md")]: {
			fontSize: "1.5rem"
		},
		fontWeight: "bold",
		margin: 0,
		color: "#986D0B"
	},
	carruselSubtitle: {
		fontSize: "1.5rem",
		[theme.breakpoints.down("md")]: {
			fontSize: "1rem"
		},
		margin: ".5rem 0 2.5rem 0",
		[theme.breakpoints.down("md")]: {
			marginBottom: "1rem"
		},
		color: "#986D0B"
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
						<div className="carrusel-container" key={item.title}>
							<img src={item.img} alt={item.title} />
							<div className="legend">
								<Typography className={classes.carruselTitle}>
									{item.title}
								</Typography>
								<Typography className={classes.carruselSubtitle}>
									{item.subtitle}
								</Typography>
								<div className="carrusel-container">
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
