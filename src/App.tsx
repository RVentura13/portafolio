import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';

function App() {
	return (
		<>
			<NavBar />
			<Home />
			<About />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
