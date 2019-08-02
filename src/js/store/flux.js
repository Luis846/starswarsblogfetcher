const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
			favorites: {
				people: [],
				vehicles: [],
				planets: []
			}
		},
		actions: {
			addPeople: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { ...favorites, people: favorites.people.concat(obj) } });
			},
			addVehicles: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { vehicles: favorites.vehicles.concat(obj) } });
			},

			addPlanets: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { planets: favorites.planets.concat(obj) } });
			}
		}
	};
};

export default getState;
