import React from "react";
import { Link } from "react-router-dom";
const Food = () => {

	function showModal(){

	}

	return (
		<div className="main-header clearfix">
			<div className="wrapper">
				<div className="right">
					<div className="rest-logo-holder">
						<figure className="logo-holder">
							<img
								alt=""
								src="https://static.delino.com/Image/Default/logo/2yujoehm.rrz_180x180.png"
							/>
						</figure>
					</div>
				</div>
				<div className="left">
					<div className="user-login-holder">
						<div className="user-holder">
							{/* <NavLink to={"/login"}> */}
							{/* <Link to="/login" className="anchor-login">
				</Link> */}
							<button className="anchor-login" onClick={showModal} >
								<span>
									ورود / عضویت <i className="icon icon-user" />
								</span>
							</button>

							{/* </NavLink> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Food;
