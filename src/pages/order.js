import React, { Component } from "react";
import Menu from "../component/Menu";
import Cover from "../component/Cover/main";
import Sort from "../component/Menu/sort/index";
import Cart from "../component/FloatCart/index";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
class Order extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Menu: null
		};
	}
	render() {
		const path = this.props.match.url;
		return (
			<React.Fragment>
				<Cover />
				<Sort />
				<div className="rest-menu-holder">
					<div className="wrapper full-style">
						<div className="right-side-holder">
							<div className="rest-profile-container">
								<nav className="menu-tab">
									<NavLink
										exact
										to={{
											pathname: `${path}`
										}}
										activeClassName="active"
									>
										منوی غذا
									</NavLink>
									<NavLink
										to={{
											pathname: `${path}/info`
										}}
									>
										اطلاعات رستوران
									</NavLink>
								</nav>
								<div className="tab-content-holder white-box clearfix">
									<Switch>
										<Route exact path={`${path}`} component={Menu} />
										{/* <Route
												path={this.props.path + "/info"}
												component={ResInfo}
											/> */}
									</Switch>
								</div>
							</div>
						</div>
						<div className="left-side-holder side-holder readytomove">
							<Cart />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Order;
