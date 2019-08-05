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
						{({ store, actions }) => {
							return (
								<div>
									<h1>
										<u>Characters</u>
									</h1>
									{store.favorites &&
										store.people.map((item, index) => {
											let func = () => actions.addToFavoritePeople(item);
											let style = "fab fa-galactic-republic ";
											let y = store.favorites.find(i => i.name === item.name);
											if (y !== undefined) {
												style = style + "checks2";
												func = () => actions.removeToFavoritePeople(item);
											}
											return (
												<li
													key={index}
													className="list-group-item d-flex justify-content-between">
													{item.name}

													<button onClick={func}>
														<i className={style} />
													</button>
												</li>
											);
										})}

									<br />
									<h1>
										<u>Vehicles</u>
									</h1>
									{store.vehicles.map((item, index) => {
										return (
											<li key={index} className="list-group-item d-flex justify-content-between">
												{item.name}
												<button onClick={() => actions.addVehicles(item)}>
													Save to Favorite
												</button>
											</li>
										);
									})}

									<br />
									<h1>
										<u>Planets</u>
									</h1>
									{store.planets.map((item, index) => {
										return (
											<li key={index} className="list-group-item d-flex justify-content-between">
												{item.name}
												<button onClick={() => actions.addPlanets(item)}>
													Save to Favorite
												</button>
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
