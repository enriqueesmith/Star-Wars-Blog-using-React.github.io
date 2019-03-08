import React from "react";
import PropTypes from "prop-types";

export class DetailsPlanets extends React.Component {
	constructor() {
		super();
		this.state = {
			detailList: []
		};
	}

	componentDidMount = () => {
		fetch(
			"https://swapi.co/api/planets/" +
				this.props.match.params.theid +
				"?format=json"
		)
			.then(res => res.json())
			.then(horse => {
				this.setState({ detailList: horse });
			});
	};

	render() {
		return (
			<div className="container-fluid text-center mt-5">
				<div className="row justify-content">
					<div className="col-6">
						<img src="https:///via.placeholder.com/640x480" />
					</div>
					<div className="col-6">
						<h3>{this.state.detailList.name}</h3>
						<p>Epic description of planet....</p>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col descriptionColumns">
						<h6>Population</h6>
						{this.state.detailList.population}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Climate</h6>
						{this.state.detailList.climate}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Gravity</h6>
						{this.state.detailList.gravity}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Orbital Period</h6>
						{this.state.detailList.orbital_period}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Rotation Period</h6>
						{this.state.detailList.rotation_period}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Surface Water</h6>
						{this.state.detailList.surface_water}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Terrain</h6>
						{this.state.detailList.terrain}
						<br />
					</div>
				</div>
			</div>
		);
	}
}

DetailsPlanets.propTypes = {
	match: PropTypes.object
};
