import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";
import { ReactComponent as CheckIcon } from "../Assets/check.svg";
import { ReactComponent as CrossIcon } from "../Assets/cross.svg";
import { ReactComponent as PLIcon } from "../Assets/PL.svg";
import { ReactComponent as CLIcon } from "../Assets/CL.svg";
import { ReactComponent as PendingIcon } from "../Assets/pending.svg";
import { ReactComponent as ApprovedIcon } from "../Assets/approved.svg";
import { ReactComponent as RejectedIcon } from "../Assets/rejected.svg";
import { ReactComponent as EyeIcon } from "../Assets/eye.svg";
import { ReactComponent as UsersIcon } from "../Assets/users-icon.svg";
import LeaveDetailsDrawer from "./LeaveDetailsDrawer"; // Import the Drawer component

function createData(type, from, to, Days, status) {
	return { type, from, to, Days, status };
}

const rows = [
	createData("PL", "02 Jun 2024 - FH", "02 Jun 2024 - FH", 1, "pending"),
	createData("CL", "12 Jun 2024 - FH", "17 Jun 2024 - FH", 3, "pending"),
	createData("PL", "12 Jun 2024 - FH", "12 Jun 2024 - FH", 1, "rejected"),
	createData("CL", "12 Jun 2024 - FH", "02 Jun 2024 - FH", 1, "approved"),
	createData("CL", "12 Jun 2024 - FH", "17 Jun 2024 - FH", 3, "pending"),
	createData("PL", "12 Jun 2024 - FH", "12 Jun 2024 - FH", 1, "rejected"),
];

export default function LeaveReqTable() {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [selectedRow, setSelectedRow] = useState(null);

	const toggleDrawer =
		(open, row = null) =>
		() => {
			setDrawerOpen(open);
			setSelectedRow(row);
		};
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{}} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Type</TableCell>
							<TableCell align="center">From</TableCell>
							<TableCell align="center">To</TableCell>
							<TableCell align="center">Days</TableCell>
							<TableCell align="center">Status</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.type === "PL" ? <PLIcon /> : <CLIcon />}
								</TableCell>
								<TableCell align="center">{row.from}</TableCell>
								<TableCell align="center">{row.to}</TableCell>
								<TableCell align="center">{row.Days}</TableCell>
								<TableCell align="center">
									{row.status === "approved" ? (
										<ApprovedIcon />
									) : row.status === "rejected" ? (
										<RejectedIcon />
									) : (
										<PendingIcon />
									)}
								</TableCell>
								<TableCell align="center">
									{row.status === "pending" ? (
										<Stack
											direction="row"
											justifyContent={"center"}
											alignItems={"center"}
										>
											<span
												style={{
													border: "1px solid #E0E0E0",
													borderRadius: "4px",
													padding: "4px 4px",
												}}
											>
												<EyeIcon />
											</span>
											<span
												style={{
													border: "1px solid #E0E0E0",
													borderRadius: "4px",
													padding: "4px 4px",
												}}
											>
												<CrossIcon />
											</span>
										</Stack>
									) : (
										<Button onClick={toggleDrawer(true, row)}>
											View Details
										</Button>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{/* Drawer Component */}
			<LeaveDetailsDrawer
				open={drawerOpen}
				toggleDrawer={toggleDrawer}
				selectedRow={selectedRow}
			/>
		</>
	);
}
