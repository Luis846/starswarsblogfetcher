import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars Favorites</span>
				</Link>
				<div className="ml-auto" />
				<Link to="/favorite">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Favorites
					</span>
				</Link>
			</nav>
		);
	}
}
