import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { restaurantInfo } from '@Redux/util';
import { RestInfo, LeftBox, RightBox } from './style';
interface IRestInfo {
	fullAddress: string
}
const InfoRes: React.SFC = () => {
	const [restInfo, setRestInfo] = useState<IRestInfo>({
		fullAddress: ''
	});
	useEffect(() => {
		handleFetchInfo();
	}, []);

	const handleFetchInfo = () => {
		return axios
			.get(restaurantInfo)
			.then(res => {
				setRestInfo(res.data);
			})
			.catch(err => {
				console.log(`Could not fetch products. Try again later. + ${err}`);
			});
	};
	return (
		<RestInfo>
			<LeftBox>
				<div className='address-box'>
					<h2>آدرس شعبه</h2>
					<section>
						<address>{restInfo.fullAddress}</address>
						<div>تلفن:021-22180180</div>
					</section>
					<div className='map-holder'>
						<div
							className='map'
							style={{
								backgroundImage:
									'https://api.cedarmaps.com/v1/static/light/35.80741619412945,51.40486836433411,15/400x400@2x?access_token=7901df5912f7f7339cf23c3bf371a20fb84910aa&markers=marker-default|35.80741619412945,51.40486836433411'
							}}
						/>
					</div>
				</div>
			</LeftBox>
			<RightBox>
				<h2>نوع غذا</h2>
				<section>
					<ul className='food-type' />
				</section>
			</RightBox>
		</RestInfo>
	)
};

export default InfoRes;
