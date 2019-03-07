import React from "react";
import PropTypes from "prop-types";

export class Details extends React.Component {
	constructor() {
		super();
		this.state = {
			detaillist: []
		};
	}

	componentDidMount = () => {
		fetch("https://swapi.co/api/people/1")
			.then(res => res.json())
			.then(detaillist =>
				this.setState({ detaillist: detaillist.results })
			);
	};

	render() {
		console.log(this.props);

		return (
			<div className="container-fluid text-center mt-5">
				<div className="row justify-content">
					<div className="col-6">
						<img src="https:///via.placeholder.com/640x480" />
					</div>
					<div className="col-6">
						<h3>Luke Skywalker</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur.
						</p>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col descriptionColumns">
						<h6>Appearances</h6>
					</div>
					<div className="col descriptionColumns">
						<h6>Affiliations</h6>
					</div>
					<div className="col descriptionColumns">
						<h6>Locations</h6>
					</div>
					<div className="col descriptionColumns">
						<h6>Gender</h6>
					</div>
					<div className="col descriptionColumns">
						<h6>Dimensions</h6>
					</div>
					<div className="col descriptionColumns">
						<h6>Species</h6>
					</div>
					<div className="col descriptionColumns">
						<h6>Vehicles</h6>
					</div>
					<div className="col descriptionColumns">
						<h6>Weapons</h6>
					</div>
					<div className="col">
						<h6>Tools</h6>
					</div>
				</div>
			</div>
		);
	}
}
