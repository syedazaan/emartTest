import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import {Switch, Route } from 'react-router-dom';
import Products from './components/Products';

function App() {
	return (
		<>
			<Navbar/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/products" component={Products} />
				<Home/>
			</Switch>
		</>
	);
}

export default App;
