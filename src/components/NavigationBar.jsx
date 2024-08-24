import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import DashboardSection from "./DashboardSection";

const NavigationBar = () => {
	const [value, setValue] = React.useState("Leave");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		// <AppBar
		// 	position="static"
		// 	className="bg-white shadow-none border-b border-gray-200"
		// >
		// 	<Box sx={{ width: "100%", typography: "body1" }}>
		// 		<TabContext value={value}>
		// 			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
		// 				<TabList onChange={handleChange} aria-label="lab API tabs example">
		// 					<Tab
		// 						label="Attendance"
		// 						value={"Attendance"}
		// 						// className="text-gray-700 font-semibold primary-color"
		// 						className={`text-gray-700 font-semibold ${
		// 							value === "Attendance" ? "primary-color" : ""
		// 						}`}
		// 					/>
		// 					<Tab
		// 						label="Leave"
		// 						value={"Leave"}
		// 						className={`text-gray-700 font-semibold ${
		// 							value === "Leave" ? "primary-color" : ""
		// 						}`}
		// 					/>
		// 					<Tab
		// 						label="Remote"
		// 						value={"Remote"}
		// 						className={`text-gray-700 font-semibold ${
		// 							value === "Remote" ? "primary-color" : ""
		// 						}`}
		// 					/>
		// 					<Tab
		// 						label="Others"
		// 						value={"Others"}
		// 						className={`text-gray-700 font-semibold ${
		// 							value === "Others" ? "primary-color" : ""
		// 						}`}
		// 					/>
		// 				</TabList>
		// 			</Box>
		// 			<TabPanel value="Attendance">Attendance</TabPanel>
		// 			<TabPanel value="Leave">
		// 				<DashboardSection />
		// 			</TabPanel>
		// 			<TabPanel value="Remote">Remote</TabPanel>
		// 			<TabPanel value="Others">Others</TabPanel>
		// 		</TabContext>
		// 	</Box>
		// </AppBar>
		<AppBar
			position="static"
			className="bg-white shadow-none border-b border-gray-200"
		>
			<Toolbar className="p-0">
				<Tabs
					value={1}
					textColor="inherit"
					indicatorColor="primary"
					aria-label="navigation tabs"
					className="flex-grow"
				>
					<Tab label="Attendance" className="text-gray-700 font-semibold" />
					<Tab label="Leave" className="text-gray-700 font-semibold" />
					<Tab label="Remote" className="text-gray-700 font-semibold" />
					<Tab label="Others" className="text-gray-700 font-semibold" />
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};

export default NavigationBar;
