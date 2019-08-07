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
				setStore({
					favorites: favorites.filter(e => {
						e !== object;
					})
				});
			},
			addToFavoritePeople: object => {
				let { favorites } = getStore();
				let obj = favorites.find(items => {
					return items.name === object.name;
				});
				if (obj === undefined) {
					setStore({ favorites: favorites.concat(object) });
				}
			},

			peoplePops: object => {
				let { people } = getStore();
				let obj = people.find(items => {
					return items.name === object.name;
				});
				if (obj === undefined) {
					// setStore({ favorites: favorites.concat(object) });
					alert("nothing here");
				}
			}
		}
	};
};

export default getState;
