import React, { Component } from "react";
import "./Carrusel.css";
import { Carousel } from "react-responsive-carousel";
import { getCarruselEntries } from "../utils/ContentfulApi";
import { Link } from "react-router-dom";
import TrendingFlat from "@material-ui/icons/TrendingFlat";

export class Carrusel extends Component {
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
		return (
			<Carousel
				showArrows
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				autoPlay
				interval={3000}
				infiniteLoop
				className="carrusel"
			>
				{this.state.carrusel.map(item => {
					return (
						<div className="carrusel-container" key={item.title}>
							<img src={item.img} alt={item.title} />
							<div className="legend">
								<h2 className="carrusel-title">{item.title}</h2>
								<h2 className="carrusel-subtitle">{item.subtitle}</h2>
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
