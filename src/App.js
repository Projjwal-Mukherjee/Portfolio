import "./App.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
function App() {
	return (
		<div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
			<Header />
			<Banner />
			<Nav />
			<AboutUs />
			<Services />
			<Projects />
			<ContactUs />
		</div>
	);
}

export default App;
