import React from 'react';
import styles from './Footer.module.scss';
import logo from '../images/Logo.svg';
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { IoMail } from 'react-icons/io5';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaMapSigns } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
	const location = useLocation();
	if (location.pathname === '/contact') {
		return <></>;
	} else
		return (
			<div className={styles.Wrapper}>
				<div className={styles.Information}>
					<h2>
						აქციეთ თქვენი ოცნებები <span>რეალობად</span>
					</h2>
					<div className={styles.NavAboutWrapper}>
						<div className={styles.About}>
							<img alt='logo' src={logo} />
							<ul className={styles.Socials}>
								<li>
									<MdFacebook />
								</li>
								<li>
									<AiFillTwitterCircle />
								</li>
								<li>
									<AiFillInstagram />
								</li>
							</ul>
						</div>
						<div className={styles.Navigation}>
							<h3>დაგვიკავშირდით</h3>
							<ul>
								<li>
									<IoMail /> info@re-business.ge
								</li>
								<li>
									<FaPhoneSquareAlt /> +(995) 527123321
								</li>
								<li>
									<FaMapSigns /> თბილისი, Nowhere str.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.Map}>
					<iframe
						width='100%'
						frameBorder='0'
						scrolling='no'
						marginHeight='0'
						marginWidth='0'
						title='address'
						src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=41.6976287,%2044.7966624+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
					>
						<a href='https://www.maps.ie/distance-area-calculator.html'>measure distance on map</a>
					</iframe>
				</div>
			</div>
		);
};

export default Footer;
