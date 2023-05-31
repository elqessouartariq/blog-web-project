import { Routes, Route } from 'react-router-dom';

import Article from './pages/Article';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/article">
				<Route path=":id" element={<Article />} />
			</Route>

			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}

export default App;
