import { Component } from "react";
import "./App.scss";
import CardList from "./components/card-list/CardList";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		const fetchPlaceholderUsers = async () => {
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/users");
				const monsters = await res.json();
				this.setState(() => {
					return { monsters };
				});
			} catch (err) {
				console.log(err.message);
			}
		};
		fetchPlaceholderUsers();
	}

	handleSearchMonsters = (e) => {
		const searchField = e.target.value.toLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		const { monsters, searchField } = this.state;
		const { handleSearchMonsters } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<div className="container">
					<input
						type="search"
						placeholder="Search monsters..."
						onChange={handleSearchMonsters}
					/>
					<div>
						{filteredMonsters.map(({ id, name }) => (
							<CardList key={id} name={name} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
