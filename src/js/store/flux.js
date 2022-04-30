const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets:[],
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
		},
		actions: 
		
		 {
		// 	// Use getActions to call a function within a fuction
		// 	exampleFunction: () => {
		// 		getActions().changeColor(0, "green");
		// 	},
		// 	loadSomeData: () => {
		// 		/**
		// 			fetch().then().then(data => setStore({ "foo": data.bar }))
		// 		*/
		// 	},
		// 	changeColor: (index, color) => {
		// 		//get the store
		// 		const store = getStore();

		// 		//we have to loop the entire demo array to look for the respective index
		// 		//and change its color
		// 		const demo = store.demo.map((elm, i) => {
		// 			if (i === index) elm.background = color;
		// 			return elm;
		// 		});

		// 		//reset the global store
		// 		setStore({ demo: demo });
		//	},
		fetchCharacters: () => {
			fetch("https://swapi.dev/api/people/", {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then((promiseResponse) => promiseResponse.json())
				.then(data => setStore({ characters: data.results }));
		},
		fetchPlanets: () => {
			fetch("https://swapi.dev/api/planets/", {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then((promiseResponse) => promiseResponse.json())
				.then(data => setStore({ planets: data.results }));
		},
		}
	};
};

export default getState;
