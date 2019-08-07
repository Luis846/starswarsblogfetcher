import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Pops } from "./pops.js";
import "../../styles/demo.scss";
import { Example } from "./pops.js";
import { ExampleV } from "./popVehicles.js";
import { ExampleP } from "./popPlanets.js";

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
													<Example
														name={item.name}
														id={index}
														gender={item.gender}
														birthdate={item.birth_year}
														height={item.height}
														mass={item.mass}
														eyes={item.eye_color}
													/>
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
									{store.favorites &&
										store.vehicles.map((item, index) => {
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
													<ExampleV
														name={item.name}
														id={index}
														cargo={item.cargo_capacity}
														cost={item.cost_in_credits}
														crew={item.crew}
														pass={item.passengers}
														brand={item.manufacturer}
													/>
													<button onClick={func}>
														<i className={style} />
													</button>
												</li>
											);
										})}

									<br />
									<h1>
										<u>Planets</u>
									</h1>
									{store.favorites &&
										store.planets.map((item, index) => {
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
													<ExampleP
														name={item.name}
														id={index}
														climate={item.climate}
														diameter={item.diameter}
														gravity={item.gravity}
														orbit={item.orbital_period}
														day={item.rotation_period}
													/>

													<button onClick={func}>
														<i className={style} />
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
