import './App.scss';
import Home from './page/Home';
import Css from './page/Css';
import Image from './page/Image';
import Router from './page/Router';
import Not from './page/Not';

import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import StateProps from './page/StateProps';

function App() {
	return (
		<BrowserRouter>
			<div className="wrap">
				<header>
					<nav>
						{/* <a href="javascrip:;">HOME</a>
						<a href="javascrip:;">CSS 활용</a>
						<a href="javascrip:;">Image 활용</a>
						<a href="javascrip:;">Router(페이지 이동)</a> */}
						<Link to="/">HOME</Link>
						<Link to="/css">CSS 활용</Link>
						<Link to="/img">Image 활용</Link>
						<Link to="/router" state='a100'>Router(페이지 이동)</Link>
						<Link to="/props">State & Props</Link>
					</nav>
				</header>
				<main>
					<Routes>
						{/* <Image /> */}
						<Route path='/' element={<Home />} />
						<Route path='/css' element={<Css />} />
						<Route path='/img' element={<Image />} />
						<Route path='/router' element={<Router />} />
						<Route path='/props' element={<StateProps data='1000' name='props' />} />
						<Route path='/*' element={<Not />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
