import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}
		componentDidMount() {
			fetch("https://swapi.co/api/people/")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;

					console.log(data.results);
					console.log("PEOPLE");

					this.setState({ store: { ...store, people: data.results } });
				});
			fetch("https://swapi.co/api/vehicles/")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					console.log(data.results);
					console.log("VEHICLES");

					this.setState({ store: { ...store, vehicles: data.results } });
				});
			fetch("https://swapi.co/api/planets/")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					console.log(data);
					console.log("PLANETS");

					this.setState({ store: { ...store, planets: data.results } });
				});
		}

		// componentDidMount() {
		// 	fetch("https://swapi.co/api/people")
		// 		.then(resp => {
		// 			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		// 		})
		// 		.then(data => {
		// 			console.log(data);
		// 			this.setState({ store: data });
		// 			//this will print on the console the exact object received from the server
		// 		});

		// 	/**
		// 	 * EDIT THIS!
		// 	 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
		// 	 * you should do your ajax requests or fetch api requests here
		// 	 **/
		// }

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
