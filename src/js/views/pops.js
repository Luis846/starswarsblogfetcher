import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

export class Example extends React.Component {
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
				<Button id={"Popover-" + this.props.id} type="button">
					{/* id used to give  unique popover instead of same*/}
					{this.props.name}
				</Button>
				<Popover
					placement="bottom"
					isOpen={this.state.popoverOpen}
					target={"Popover-" + this.props.id}
					toggle={this.toggle}>
					<PopoverHeader>
						<u>Character Stats</u>
					</PopoverHeader>
					<PopoverBody>
						{"Gender: " + this.props.gender}
						<br />
						{"Birthdate: " + this.props.birthdate}
						<br />
						{"Height: " + this.props.height}
						<br />
						{"EyeColor: " + this.props.eyes}
						<br />
						{"Weight: " + this.props.mass}
					</PopoverBody>
				</Popover>
			</div>
		);
	}
}

Example.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number,
	gender: PropTypes.string,
	birthdate: PropTypes.string,
	height: PropTypes.number,
	eyes: PropTypes.string,
	mass: PropTypes.string
};
