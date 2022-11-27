import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../images/Logo.svg';
import { RiMenuLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	const navigate = useNavigate();
	const location = useLocation().pathname;
	const headerStyles = {
		position: 'relative',
		background: 'linear-gradient(225deg, rgba(39,26,0,1) 0%, rgba(0,0,0,1) 100%)',
		boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
	};

	const handleClick = () => {
		navigate('/login');
		setShowNav(false);
	};

	return (
		<header style={location !== '/' ? headerStyles : {}}>
			<img className={styles.Logo} src={logo} alt='logo' />
			<RiMenuLine className={styles.HamburgerIcon} onClick={() => setShowNav((prev) => !prev)} />
			<nav className={showNav ? styles.Navigation : styles.active}>
				<ul>
					<li onClick={() => setShowNav(false)}>
						<Link to='/'>მთავარი</Link>
					</li>
					<li onClick={() => setShowNav(false)}>
						<Link to='/about'>ჩვენს შესახებ</Link>
					</li>
					<li onClick={() => setShowNav(false)}>
						<Link to='/properties'>კატალოგი</Link>
					</li>
					<li onClick={() => setShowNav(false)}>
						<Link to='/contact'>დაგვიკავშირდით</Link>
					</li>
					<li onClick={() => setShowNav(false)}>
						<button className={styles.LoginButton} onClick={handleClick}>
							შესვლა
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
