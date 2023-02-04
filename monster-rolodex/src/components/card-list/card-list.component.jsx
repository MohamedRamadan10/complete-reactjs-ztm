// import { Component } from "react";
import "./card-list.styles.scss";

// class CardList extends Component {
// 	render() {
// 		const { name, id, email } = this.props;

// 		return (
// 			<div className="card">
// 				<img
// 					src={`https://robohash.org/${id}?set=set2&size=400x400`}
// 					alt={name}
// 				/>
// 				<div className="name">{name}</div>
// 				<a href={`mailto:${email}`} className="email">
// 					{email}
// 				</a>
// 			</div>
// 		);
// 	}
// }

const CardList = ({ id, name, email }) => {
	return (
		<div className="card">
			<div className="img">
				<img
					src={`https://robohash.org/${id}?set=set2&size=400x400`}
					alt={name}
				/>
			</div>
			<div className="name">{name}</div>
			<a href={`mailto:${email}`} className="email">
				{email}
			</a>
		</div>
	);
};

export default CardList;
