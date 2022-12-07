import React from 'react';
import Home from './Home/Index';
import Properties from './Properties/Properties';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Contact from './Contact/Contact';
import About from './About/About';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Property from './Properties/Details/Property';
import Add from './Add/Add';
import UserPosts from './UserPosts/UserPosts';
import { useAuthCtx } from '../store/authContext';
import { AnimatePresence } from 'framer-motion';
import UserMessages from './UserMessages/UserMessages';

function AnimatedRoutes() {
	const { user } = useAuthCtx().state;
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/properties' element={<Properties />} />
				<Route path='/properties/:id' element={<Property />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				{user && <Route path='/messages' element={<UserMessages />} />}
				{!user && <Route path='/login' element={<Login />} />}
				{!user && <Route path='/signup' element={<Signup />} />}
				<Route path='/my-posts' element={<UserPosts />} />
				{user && <Route path='/add' element={<Add />} />}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
