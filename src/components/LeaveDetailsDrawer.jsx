import React from "react";
import { Drawer, Box, Typography } from "@mui/material";
import { ReactComponent as PendingIcon } from "../Assets/pending.svg";
import { ReactComponent as ApprovedIcon } from "../Assets/approved.svg";
import { ReactComponent as RejectedIcon } from "../Assets/rejected.svg";

export default function LeaveDetailsDrawer({
	open,
	toggleDrawer,
	selectedRow,
}) {
	console.log("SelectedRow: ", selectedRow);
	return (
		<Drawer
			anchor="right"
			open={open}
			onClose={toggleDrawer(false)}
			sx={{
				"& .MuiDrawer-paper": {
					width: "100%",
					maxWidth: "600px",
					boxSizing: "border-box",
					borderRadius: "12px 0 0 12px",
					padding: "24px",
					overflow: "hidden",
					background: "#FFFFFF",
				},
			}}
		>
			<Box className="flex flex-col h-full">
				<Box className="flex justify-between items-center mb-6">
					<Typography
						variant="h6"
						className="text-xl font-semibold text-gray-800"
					>
						Leave Details
					</Typography>
					<button
						onClick={toggleDrawer(false)}
						className="text-gray-400 hover:text-gray-600 focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					</button>
				</Box>
				{selectedRow && (
					<Box className="space-y-4 flex-grow">
						<DetailRow
							label="Leave Type"
							value="Casual Leave"
							// value={selectedRow.type === "CL" ? "Casual Leave" : "Paid Leave"}
						/>
						<DetailRow
							label="Date"
							value="02-Jun-2024 to 03-Jun-2024"
							// value={`${selectedRow.from
							// 	.split("-")[0]
							// 	.trim()} to ${selectedRow.to.split("-")[0].trim()}`}
						/>
						<DetailRow
							label="Status"
							// value={
							// 	selectedRow.status === "approved" ? (
							// 		<ApprovedIcon />
							// 	) : selectedRow.status === "rejected" ? (
							// 		<RejectedIcon />
							// 	) : (
							// 		<PendingIcon />
							// 	)
							// }
							value={<PendingIcon />}
						/>
						<DetailRow label="Requested By" value="Suresh" />
						<DetailRow label="Requested Date" value="04-Jun-2024 11:00:00 AM" />
						<DetailRow label="Approved By" value="Komaravel" />
						<DetailRow label="Approved Date" value="04-Jun-2024 11:00:00 AM" />
						<DetailRow
							label="Reason"
							value="Personal Leave. This text can go up to two or three lines here like this."
							multiline
						/>
					</Box>
				)}
			</Box>
		</Drawer>
	);
}

function DetailRow({ label, value, multiline = false }) {
	return (
		<Box
			className={`flex ${
				multiline ? "flex-col" : "justify-between"
			} py-3 border-b border-gray-200 last:border-b-0`}
		>
			<Typography variant="body2" className="text-sm font-medium text-gray-500">
				{label}
			</Typography>
			<Typography
				variant="body2"
				className={`text-sm text-gray-900 ${multiline ? "mt-1" : "text-right"}`}
				style={{ maxWidth: multiline ? "100%" : "60%", wordWrap: "break-word" }}
			>
				{value}
			</Typography>
		</Box>
	);
}
