import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export class ExampleV extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen: false
		};
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render() {
		return (
			<div>
				<Button id={"Popover-V" + this.props.id} type="button">
					{/* id used to give  unique popover instead of same*/}
					{this.props.name}
				</Button>
				<Popover
					placement="bottom"
					isOpen={this.state.popoverOpen}
					target={"Popover-V" + this.props.id}
					toggle={this.toggle}>
					<PopoverHeader>
						<u>Vehicle Stats:</u>
					</PopoverHeader>
					<PopoverBody>
						{"Cargo Capacity: " + this.props.cargo}
						<br />
						{"Purchase Price: " + this.props.cost}
						<br />
						{"Crew Capacity: " + this.props.crew}
						<br />
						{"Manufacturer: " + this.props.brand}
						<br />
						{"Passenger Capacity: " + this.props.pass}
					</PopoverBody>
				</Popover>
			</div>
		);
	}
}

ExampleV.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	cargo: PropTypes.string,
	cost: PropTypes.number,
	crew: PropTypes.number,
	brand: PropTypes.string,
	pass: PropTypes.number
};
