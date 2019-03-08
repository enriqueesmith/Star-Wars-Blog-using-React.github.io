import React from "react";
import PropTypes from "prop-types";

export class Details extends React.Component {
	constructor() {
		super();
		this.state = {
			detailList: []
		};
	}

	componentDidMount = () => {
		fetch(
			"https://swapi.co/api/people/" +
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
						<p>Epic backstory of character....</p>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col descriptionColumns">
						<h6>Gender</h6>
						{this.state.detailList.gender}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Height</h6>
						{this.state.detailList.height}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Mass</h6>
						{this.state.detailList.mass}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Hair Color</h6>
						{this.state.detailList.hair_color}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Eye Color</h6>
						{this.state.detailList.eye_color}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Skin Color</h6>
						{this.state.detailList.skin_color}
						<br />
					</div>
					<div className="col descriptionColumns">
						<h6>Birth Year</h6>
						{this.state.detailList.birth_year}
						<br />
					</div>
				</div>
			</div>
		);
	}
}

Details.propTypes = {
	match: PropTypes.object
};
