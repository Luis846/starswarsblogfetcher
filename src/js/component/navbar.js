import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			showFavorites: false
		};
	}
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars Favorites</span>
				</Link>
				<div className="ml-auto" />

				<Context.Consumer>
					{({ store }) => {
						if (store.favorites.length > 0 && this.state.showFavorites === false)
							this.setState({ showFavorites: true });
						if (store.favorites.length === 0 && this.state.showFavorites === true)
							this.setState({ showFavorites: false });

						return (
							<div>
								{this.state.showFavorites && ( //if this is true it renders the nav bar button
									<Link to="/favorite">
										<button className="btn btn-primary btn-lg" href="#" role="button">
											Favorites
										</button>
									</Link>
								)}
							</div>
						);
					}}
				</Context.Consumer>
			</nav>
		);
	}
}
