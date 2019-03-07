import React from "react";
import SingleCard from "../component/singlecard.jsx";
import VehicleCard from "../component/vehicleCard.jsx";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			people: [],
			vehicles: []
		};
	}

	componentDidMount = () => {
		fetch("https://swapi.co/api/people/")
			.then(res => res.json())
			.then(people => this.setState({ people: people.results }));
		fetch("https://swapi.co/api/vehicles/")
			.then(res => res.json())
			.then(vehicles => this.setState({ vehicles: vehicles.results }));
	};

	render() {
		return (
			<div className="container-fluid text-center mt-5">
				<h2> People </h2>
				<div className="card-columns d-flex justify-content-between">
					{this.state.people.map((elem, index) => {
						return (
							<SingleCard
								name={elem.name}
								gender={elem.gender}
								key={index}
								camel={index}
							/>
						);
					})}
				</div>
				<h2> Vehicles </h2>
				<div className="card-columns d-flex justify-content-between">
					{this.state.vehicles.map((elem, index) => {
						return (
							<VehicleCard
								name={elem.name}
								model={elem.model}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
