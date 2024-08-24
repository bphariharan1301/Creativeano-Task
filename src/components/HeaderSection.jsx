import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { ReactComponent as Logo } from "../Assets/logo.svg";

export default function HeaderSection() {
	return (
		<AppBar position="static" className="header bg-white">
			<Toolbar className="p-0 flex justify-end">
				<div className="header-icon flex items-center float-right">
					{/* <div className="bg-indigo-900 text-white p-2 rounded-full"> */}
					<Logo />
					{/* </div> */}
				</div>
			</Toolbar>
		</AppBar>
	);
}
