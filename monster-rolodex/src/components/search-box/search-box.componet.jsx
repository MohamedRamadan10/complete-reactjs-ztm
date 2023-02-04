// import { Component } from "react";
import "./search-box.styles.scss";

// class SearchBox extends Component {
// 	render() {
// 		const { handleSearchMonsters, placeholder } = this.props;
// 		return (
// 			<input
// 				type="search"
// 				className="search"
// 				placeholder={placeholder}
// 				onChange={handleSearchMonsters}
// 			/>
// 		);
// 	}
// }

const SearchBox = ({ placeholder, handleSearchMonsters }) => {
	return (
		<input
			type="search"
			className="search"
			placeholder={placeholder}
			onChange={handleSearchMonsters}
		/>
	);
};

export default SearchBox;
