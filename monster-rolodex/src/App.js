import { Component } from "react";
import "./App.scss";

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

	render() {
		const filteredMonsters = this.state.monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(this.state.searchField);
		});

		return (
			<div className="App">
				<div className="container">
					<input
						type="search"
						placeholder="Search monsters..."
						onChange={(e) => {
							const searchField = e.target.value.toLowerCase();
							this.setState(() => {
								return { searchField };
							});
						}}
					/>
					<ul>
						{filteredMonsters.map((monster) => (
							<li key={monster.id}>{monster.name}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
