import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export class ExampleP extends React.Component {
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
				<Button id={"Popover-P" + this.props.id} type="button">
					{/* id used to give  unique popover instead of same*/}
					{this.props.name}
				</Button>
				<Popover
					placement="bottom"
					isOpen={this.state.popoverOpen}
					target={"Popover-P" + this.props.id}
					toggle={this.toggle}>
					<PopoverHeader>
						<u>Planetary Stats:</u>
					</PopoverHeader>
					<PopoverBody>
						{"Climate: " + this.props.climate}
						<br />
						{"Diameter: " + this.props.diameter}
						<br />
						{"Gravity: " + this.props.gravity}
						<br />
						{"Orbit: " + this.props.orbit}
						<br />
						{"DayHours: " + this.props.day}
					</PopoverBody>
				</Popover>
			</div>
		);
	}
}

ExampleP.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	climate: PropTypes.string,
	diameter: PropTypes.number,
	gravity: PropTypes.string,
	orbit: PropTypes.string,
	day: PropTypes.number
};
