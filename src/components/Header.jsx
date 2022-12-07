import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../images/Logo.svg';
import { RiMenuLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import usePropertiesCtx from '../store/propertiesContext';
import { getHighestPrice, getResettedFilters } from '../helpers';
import { RiUser3Fill } from 'react-icons/ri';
import { useAuthCtx } from '../store/authContext';
import { motion } from 'framer-motion';
import { BiMessageDetail } from 'react-icons/bi';

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	const navigate = useNavigate();
	const location = useLocation().pathname;
	const { setFilters } = usePropertiesCtx();
	const { user } = useAuthCtx().state;
	const { properties } = usePropertiesCtx();
	const headerStyles = {
		position: 'relative',
		background: 'linear-gradient(225deg, rgba(39,26,0,1) 0%, rgba(0,0,0,1) 100%)',
		boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
	};

	const handleClick = () => {
		navigate('/login');
		setShowNav(false);
	};

	const resetFilters = () => {
		const highestPrice = getHighestPrice(properties);
		const resettedFilters = getResettedFilters(highestPrice);
		setFilters(resettedFilters);
	};

	return (
		<motion.header
			initial={{ y: '-200%' }}
			animate={{ y: '0' }}
			transition={{ duration: 1, type: 'just' }}
			style={location !== '/' ? headerStyles : {}}
		>
			<img className={styles.Logo} src={logo} alt='logo' />
			<RiMenuLine className={styles.HamburgerIcon} onClick={() => setShowNav((prev) => !prev)} />
			<nav className={showNav ? styles.Navigation : styles.active}>
				<ul>
					<li onClick={() => setShowNav(false)}>
						<Link to='/' onClick={resetFilters}>
							მთავარი
						</Link>
					</li>
					<li onClick={() => setShowNav(false)}>
						<Link to='/about'>ჩვენს შესახებ</Link>
					</li>
					<li onClick={() => setShowNav(false)}>
						<Link to='/properties'>განცხადებები</Link>
					</li>
					<li onClick={() => setShowNav(false)}>
						<Link to='/contact'>დაგვიკავშირდით</Link>
					</li>
					<li onClick={() => !user && setShowNav(false)}>
						{user ? (
							<div className={styles.UserPanel}>
								<button className={styles.LoginButton} onClick={() => navigate('/my-posts')}>
									<RiUser3Fill /> {user.name}
								</button>
								<BiMessageDetail onClick={() => navigate('/messages')} />
							</div>
						) : (
							<button className={styles.LoginButton} onClick={handleClick}>
								შესვლა
							</button>
						)}
					</li>
				</ul>
			</nav>
		</motion.header>
	);
};

export default Header;
