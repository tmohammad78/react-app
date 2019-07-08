import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../services/cover/action";
import axios from "axios";
import { resturantData } from "../../services/util";
class Cover extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurant: ""
		};
	}
	componentDidMount() {
		this.handleFetchInfo();
	}
	handleFetchInfo() {
		return axios
			.get(resturantData)
			.then(res => {
				let resInfo = res.data;
				this.setState({
					resturantData: resInfo
				});
				console.log(this.state.resturantData);
				// return dispatch({
				// 	type: FETCH_DATA,
				// 	payload: resInfo
				// });
			})
			.catch(err => {
				console.log("Could not fetch products. Try again later.");
			});
	}

	render() {
		const dataInfo = this.state.resturantData;
		console.log(dataInfo);
		if (dataInfo) {
			return (
				<div className="cover-container clearfix">
					<div
						className="rest-cover"
						style={{
							backgroundImage: `url(https://static.delino.com/Image/Restaurant/Cover/hrbmnm0b.t32_big.jpg)`
						}}
					/>
					<div className="wrapper clearfix">
						<div className="rest-logo-holder">
							<aside>
								<h1>{dataInfo.name}</h1>
								<h2>{dataInfo.fullAddress}</h2>
							</aside>
						</div>
						<footer>
							<div className="online-status offline">
								<span>
									<label>{dataInfo.offlineText}</label>
									{dataInfo.mealTime}
								</span>
							</div>
						</footer>
					</div>
				</div>
			);
		} else {
			return "";
		}
	}
}
// const mapStateToProps = state => ({
// 	resInfo: state.resInfo
// });

// export default connect(
// 	mapStateToProps,
// 	{ fetchData }
// )(Cover);
export default Cover;
