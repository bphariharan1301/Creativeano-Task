import React from "react";
import { Drawer, Box, Typography } from "@mui/material";

export default function LeaveDetailsDrawer({
	open,
	toggleDrawer,
	selectedRow,
}) {
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
					borderRadius: "12px", // Rounded corners
					padding: "24px", // Add padding to content
					overflow: "hidden", // Prevent overflow issues
				},
			}}
		>
			<Box className="p-4 bg-white rounded-lg shadow-md h-full max-w-full sm:max-w-[600px]">
				<Box className="flex justify-between items-center mb-4">
					<Typography variant="h6" className="font-semibold text-lg">
						Leave Details
					</Typography>
					<button
						onClick={toggleDrawer(false)}
						className="text-gray-500 hover:text-gray-700 focus:outline-none text-2xl"
					>
						&#x2715;
					</button>
				</Box>
				{selectedRow && (
					<Box className="space-y-4">
						<Box className="space-y-2">
							{/* Row for Leave Type */}
							<Box className="flex justify-between border-b border-gray-200 pb-2">
								<Typography
									variant="body1"
									className="text-sm font-semibold text-gray-800"
								>
									Leave Type
								</Typography>
								<Typography variant="body1" className="text-sm text-gray-600">
									Casual Leave
								</Typography>
							</Box>

							{/* Row for Date */}
							<Box className="flex justify-between border-b border-gray-200 pb-2">
								<Typography
									variant="body1"
									className="text-sm font-semibold text-gray-800"
								>
									Date
								</Typography>
								<Typography variant="body1" className="text-sm text-gray-600">
									02-Jun-2024 to 03-Jun-2024
								</Typography>
							</Box>

							{/* Row for Status */}
							<Box className="flex justify-between border-b border-gray-200 pb-2">
								<Typography
									variant="body1"
									className="text-sm font-semibold text-gray-800"
								>
									Status
								</Typography>
								<Typography variant="body1" className="text-sm text-gray-600">
									<span className="inline-block px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
										Approved
									</span>
								</Typography>
							</Box>

							{/* Row for Requested By */}
							<Box className="flex justify-between border-b border-gray-200 pb-2">
								<Typography
									variant="body1"
									className="text-sm font-semibold text-gray-800"
								>
									Requested By
								</Typography>
								<Typography variant="body1" className="text-sm text-gray-600">
									Suresh
								</Typography>
							</Box>

							{/* Row for Requested Date */}
							<Box className="flex justify-between border-b border-gray-200 pb-2">
								<Typography
									variant="body1"
									className="text-sm font-semibold text-gray-800"
								>
									Requested Date
								</Typography>
								<Typography variant="body1" className="text-sm text-gray-600">
									04-Jun-2024 11:00:00 AM
								</Typography>
							</Box>

							{/* Row for Approved By */}
							<Box className="flex justify-between border-b border-gray-200 pb-2">
								<Typography
									variant="body1"
									className="text-sm font-semibold text-gray-800"
								>
									Approved By
								</Typography>
								<Typography variant="body1" className="text-sm text-gray-600">
									Komaravel
								</Typography>
							</Box>

							{/* Row for Approved Date */}
							<Box className="flex justify-between border-b border-gray-200 pb-2">
								<Typography
									variant="body1"
									className="text-sm font-semibold text-gray-800"
								>
									Approved Date
								</Typography>
								<Typography variant="body1" className="text-sm text-gray-600">
									04-Jun-2024 11:00:00 AM
								</Typography>
							</Box>

							{/* Row for Reason */}
							<Box className="flex justify-between pb-2">
								<Typography
									variant="body1"
									className="text-sm font-semibold text-gray-800"
								>
									Reason
								</Typography>
								<Typography
									variant="body1"
									className="text-sm text-gray-600 break-words"
									sx={{ paddingLeft: "10% !important" }}
								>
									Personal Leave. [This text can go up to two or three lines
									here like this.]
								</Typography>
							</Box>
						</Box>
					</Box>
				)}
			</Box>
		</Drawer>
	);
}
