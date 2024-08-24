import React from "react";
import NavigationBar from "./components/NavigationBar";
import DashboardSection from "./components/DashboardSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderSection from "./components/HeaderSection";

const App = () => {
	return (
		<div className="App">
			<HeaderSection />
			<NavigationBar />
			<DashboardSection />
		</div>
	);
};

export default App;
