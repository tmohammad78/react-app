import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMenu } from "../../services/menu/actions";
import Spinner from "../Spinner";
import FoodList from "./FoodList";
import "../Menu/style.scss";
import Category from '../Category/index';

class Menu extends Component {
	static propTypes = {
		fetchMenu: PropTypes.func.isRequired,
		categoryList: PropTypes.array.isRequired,
		sort: PropTypes.string
	};

	state = {
		isLoading: true,
		sort: this.props.sort
	};

	componentWillUnmount() {
		this.willUnmount = true;
	}

	componentDidMount() {
		this.handleFetchMenu();
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		const { sort: nextSort } = nextProps;
		if (nextSort !== prevState.sort) {
			return { sort: nextSort, isLoading: true };
		}
		return null;
	}
	componentDidUpdate(prevProps, prevState) {
		const { sort: prevSort } = prevProps;
		if (prevSort !== this.props.sort) {
			this.handleFetchMenu();
		}
	}

	handleFetchMenu() {
		const { sort } = this.state;
		console.log('sort'+sort);
		this.props.fetchMenu(sort, () => {
			if (!this.willUnmount) {
				this.setState({ isLoading: false });
			}
		});
	}
	// renderCategory(data) {
	// 	if (data) {
	// 		console.log(data);
	// 		return data.map((category, i) => {
	// 			console.log(category);
	// 			return <Category item={data} key={i} />;
	// 		});
	// 	} else {
	// 		return " ";
	// 	}
	// }

	render() {
		const { isLoading } = this.state;
		const { categoryList } = this.props;
		return (
			<React.Fragment>
				{isLoading && <Spinner />}
				<div>
					<Category item={categoryList} />
					<div className="food_menu clearfix">
						<FoodList products={categoryList} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	categoryList: state.menu.categoryList,
	sort: state.sort.type
});

export default connect(
	mapStateToProps,
	{ fetchMenu }
)(Menu);
