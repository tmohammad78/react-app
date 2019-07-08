import React, { Component } from "react";
import Order from "./pages/order"; //
// import Home from "../components/App/home";
import Home from "./pages/home";
import Cart from "./component/FloatCart";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
// const Footer = React.lazy(() => import("./component/Footer/footer"));
// const Header = React.lazy(() => import("./component/Header/header"));
// import Cart from "../components/FloatCart";
import { Switch, Route, BrowserRouter as Router, withRouter } from "react-router-dom";
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Router>
					<Switch>
						{/* <Route exact path="/" component={Home} />
						<Route path="/order" component={resProfile} /> */}

						<Route exact path="/" component={Order} />
						{/* <Route exact path="/cart" render={()=> <Cart/>}  /> */}
						{/* <Route exact path="/login" Component={}  /> */}
					</Switch>
				</Router>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
