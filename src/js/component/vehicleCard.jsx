import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function VehicleCard(props) {
	return (
		<div className="card w-50">
			<img
				className="card-img-top"
				src="https://via.placeholder.com/200"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Vehicle Name: {props.name} <br />
					Model: {props.model}
				</p>
				<Link to={"/details/" + (props.camel + 1)}>
					<a href="#" className="btn btn-primary">
						Details
					</a>
				</Link>
			</div>
		</div>
	);
}

export default VehicleCard;

VehicleCard.propTypes = {
	name: PropTypes.string,
	model: PropTypes.string,
	camel: PropTypes.string
};
