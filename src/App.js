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

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/properties' element={<Properties />} />
				<Route path='/property' element={<Property />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
