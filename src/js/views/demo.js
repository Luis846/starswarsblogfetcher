import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store }) => {
							return (
								<div>
									<h1>Characters</h1>
									{store.people.map((item, index) => {
										return (
											<li key={index} className="list-group-item d-flex justify-content-between">
												{item.name}
											</li>
										);
									})}

									<br />
									<h1>Vehicles</h1>
									{store.vehicles.map((item, index) => {
										return (
											<li key={index} className="list-group-item d-flex justify-content-between">
												{item.name}
											</li>
										);
									})}

									<br />
									<h1>Planets</h1>
									{store.planets.map((item, index) => {
										return (
											<li key={index} className="list-group-item d-flex justify-content-between">
												{item.name}
											</li>
										);
									})}
								</div>
							);
						}}
					</Context.Consumer>
				</ul>
			</div>
		);
	}
}
