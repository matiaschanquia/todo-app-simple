import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import List from "./components/List";

const App = () => {
	return (
		<div className="container-app">
			<Header />
			<List />
			<Footer />
		</div>
	);
};

export default App;