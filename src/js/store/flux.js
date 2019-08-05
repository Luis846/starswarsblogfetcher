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
			favorites: []
		},
		actions: {
			removeToFavoritePeople: object => {
				let { favorites } = getStore();
				// let obj = favorites.find(items => {});
				setStore({
					favorites: favorites.filter(e => {
						e !== object;
					})
				});

				// if (obj === !undefined) {
				// 	setStore({ favorites: favorites.concat(object) });
				// 	delete items.name === object.name;
				// }
			},
			addToFavoritePeople: object => {
				// console.log(object.target);
				// style = "checks2";
				// console.log("d" + object);
				let { favorites } = getStore();
				let obj = favorites.find(items => {
					return items.name === object.name;
				});
				if (obj === undefined) {
					setStore({ favorites: favorites.concat(object) });
				}

				//  else {
				//     if()
				//     let obj = store.favorites.find(items => items.name === object.name);
				// }
			},
			addPeople: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { ...favorites, people: favorites.push(obj) } });
			},
			addVehicles: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { ...favorites, vehicles: favorites.vehicles.push(obj) } });
			},

			addPlanets: obj => {
				let { favorites } = getStore();
				setStore({ favorites: { ...favorites, planets: favorites.planets.push(obj) } });
			}
		}
	};
};

export default getState;
