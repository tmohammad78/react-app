import React, { Component } from "react";
import { Link } from "react-scroll";
class Category extends Component {
	constructor(props) {
		super(props);
	}
	renderItem(food, i) {
		return food.map((item, i) => {
			return (
				<Link
					key={`${item.id}`}
					className=" indexbox"
					activeClass="activecategory"
					to={item.id.toString()}
					spy={true}
					smooth={true}
					offset={-70}
				>
					<div className="i-w">
						<span title={item.title}>
							<div className={`ic-c c-${item.logo}`} />
							<p>{item.title}</p>
						</span>
					</div>
				</Link>
			);
		});
	}
	render() {
		const { item } = this.props;
		console.log(item);
		return (
			<div className="parent">
				<div className="categories">
					<div className="owl-item">
						{this.renderItem(item)}
					</div>
				</div>
			</div>
		);
	}
}
export default Category;
