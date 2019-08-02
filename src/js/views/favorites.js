import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Favorite extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store }) => {
						return (
							<div>
								{store.favorites.people.map((item, i) => {
									return <div key={i}>{item.name}</div>;
								})}
							</div>
						);
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}
