import React from 'react';
import './style.scss';

const Footer: React.SFC = () => {
	return (
		<div className='main-footer clearfix'>
			<div className='wrapper'>
				<div className='right'>
					<p>© کپی رایت -</p>
				</div>
				<div className='left'>
					<nav className='social-list'>
						<a href='https://www.instagram.com/shandizvipjordan/'>instagram</a>
					</nav>
				</div>
			</div>
			<div className='delino'>
				<div className='wrapper'>
					<div className='delino-copyright'>
						<div>
							طراحی و بیاده سازی توسط
              <a href='https://www.delino.com/about'>
								<img
									src='https://www.delino.com/img/icons/img-delino-symbol.png'
									width='16'
									height='16'
									alt='دلینو'
									style={{
										verticalAlign: 'middle'
									}}
								/>
                دلینو
              </a>
						</div>
						<small className='en-num'>V 1.1.0</small>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
