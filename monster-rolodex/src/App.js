import { useEffect, useState } from "react";
import "./App.scss";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.componet";

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		const fetchPlaceholderUsers = async () => {
// 			try {
// 				const res = await fetch("https://jsonplaceholder.typicode.com/users");
// 				const monsters = await res.json();
// 				this.setState(() => {
// 					return { monsters };
// 				});
// 			} catch (err) {
// 				console.log(err.message);
// 			}
// 		};
// 		fetchPlaceholderUsers();
// 	}

// 	handleSearchMonsters = (e) => {
// 		const searchField = e.target.value.toLowerCase();
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		const { monsters, searchField } = this.state;
// 		const { handleSearchMonsters } = this;

// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className="App">
// 				<div className="container">
// 					<SearchBox
// 						handleSearchMonsters={handleSearchMonsters}
// 						placeholder="Search monsters..."
// 					/>
// 					<div className="layout">
// 						{filteredMonsters.map(({ id, name, email }) => (
// 							<CardList key={id} name={name} id={id} email={email} />
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

const App = () => {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState("");

	const handleSearchMonsters = (e) => {
		const searchField = e.target.value.toLowerCase();
		setSearchField(searchField);
	};

	const filteredMonsters = monsters.filter((monster) => {
		return monster.name.toLowerCase().includes(searchField);
	});

	useEffect(() => {
		const fetchPlaceholderUsers = async () => {
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/users");
				const monsters = await res.json();
				setMonsters(monsters);
			} catch (err) {
				console.log(err.message);
			}
		};
		fetchPlaceholderUsers();
	}, []);

	return (
		<div className="App">
			<div className="container">
				<SearchBox
					handleSearchMonsters={handleSearchMonsters}
					placeholder="Search monsters..."
				/>
				<div className="layout">
					{filteredMonsters.map(({ id, name, email }) => (
						<CardList key={id} name={name} id={id} email={email} />
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
