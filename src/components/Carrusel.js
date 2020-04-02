import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getCarruselEntries } from "../utils/ContentfulApi";

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
			<Carousel showArrows={true} showThumbs={false} showStatus={false}>
				{this.state.carrusel.map(item => {
					return (
						<div key={item.title}>
							<img src={item.img} alt={item.title} />
						</div>
					);
				})}
			</Carousel>
		);
	}
}
