import React from "react";
import PeopleCard from "../component/peoplecard.jsx";
import PlanetCard from "../component/planetCard.jsx";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			people: [],
			planets: []
		};
	}

	componentDidMount = () => {
		fetch("https://swapi.co/api/people/")
			.then(res => res.json())
			.then(people => this.setState({ people: people.results }));
		fetch("https://swapi.co/api/planets/")
			.then(res => res.json())
			.then(planets => this.setState({ planets: planets.results }));
	};

	render() {
		return (
			<div className="container-fluid text-center mt-5">
				<div className="row character">
					<h2> People </h2>
					<div className="card-columns d-flex justify-content-between">
						{this.state.people.map((elem, index) => {
							return (
								<PeopleCard
									name={elem.name}
									gender={elem.gender}
									key={index}
									camel={index}
								/>
							);
						})}
					</div>
				</div>
				<div className="row character">
					<h2> Planets </h2>
					<div className="card-columns d-flex justify-content-between">
						{this.state.planets.map((elem, index) => {
							return (
								<PlanetCard
									name={elem.name}
									population={elem.population}
									key={index}
									camel={index}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
