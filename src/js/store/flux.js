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
			addToFavoritePeople: item => {
				item.target.classList.add("checks2");
			},
			addPeople: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { ...favorites, people: favorites.people.concat(obj) } });
				let store = getStore();
				let objs = store.favorites.find(items => items.name === object.name);
				if (objs === undefined) {
					setStore({ favorites: store.favorites.concat(object) });
				}
			},
			addVehicles: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { ...favorites, vehicles: favorites.vehicles.concat(obj) } });
				let store = getStore();
				let objs = store.favorites.find(items => items.name === object.name);
				if (objs === undefined) {
					setStore({ favorites: store.favorites.concat(object) });
				}
			},

			addPlanets: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { ...favorites, planets: favorites.planets.concat(obj) } });
				let store = getStore();
				let objs = store.favorites.find(items => items.name === object.name);
				if (objs === undefined) {
					setStore({ favorites: store.favorites.concat(object) });
				}
			}
		}
	};
};

export default getState;
