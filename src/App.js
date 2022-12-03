import Home from './components/Home/Index';
import Properties from './components/Properties/Properties';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Property from './components/Properties/Details/Property';
import Add from './components/Add/Add';
import { useAuthCtx } from './store/authContext';
import UserPosts from './components/UserPosts/UserPosts';

function App() {
	const { user } = useAuthCtx().state;
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/properties' element={<Properties />} />
				<Route path='/properties/:id' element={<Property />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				{!user && <Route path='/login' element={<Login />} />}
				{!user && <Route path='/signup' element={<Signup />} />}
				<Route path='/my-posts' element={<UserPosts />} />
				{user && <Route path='/add' element={<Add />} />}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
