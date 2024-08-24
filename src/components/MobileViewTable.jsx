import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Button,
	Divider,
	TextField,
	Badge,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { ReactComponent as CrossIcon } from "../Assets/cross.svg";
import { ReactComponent as CheckIcon } from "../Assets/check.svg";
import { ReactComponent as PLIcon } from "../Assets/PL.svg";
import { ReactComponent as CLIcon } from "../Assets/CL.svg";

// Dummy Datas
function createData(name, type, from, to, Days) {
	return { name, type, from, to, Days };
}

const rows = [
	createData("Suresh", "PL", "02 Jun 2024 - FH", "02 Jun 2024 - FH", 0.5),
	createData("Logesh", "CL", "12 Jun 2024 - FH", "17 Jun 2024 - FH", 4),
	createData("Ashok Kumar", "PL", "12 Jun 2024 - FH", "12 Jun 2024 - FH", 1),
	createData("Suresh", "CL", "12 Jun 2024 - FH", "02 Jun 2024 - FH", 0.5),
	createData("Ramesh", "PL", "02 Jul 2024 - FH", "02 Jul 2024 - FH", 0.5),
	createData("Suresh", "PL", "02 Jun 2024 - FH", "02 Jun 2024 - FH", 1),
	createData("Logesh", "CL", "12 Jun 2024 - FH", "17 Jun 2024 - FH", 2),
	createData("Ashok Kumar", "PL", "12 Jun 2024 - FH", "12 Jun 2024 - FH", 2),
	createData("Suresh", "CL", "12 Jun 2024 - FH", "02 Jun 2024 - FH", 5),
	createData("Ashok Kumar", "PL", "02 Jul 2024 - FH", "02 Jul 2024 - FH", 0.5),
];

const MobileViewTable = () => {
	const [page, setPage] = React.useState(0);
	const rowsPerPage = 5;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
		renderPageNumbers();
	};

	const renderPageNumbers = () => {
		const totalPages = Math.ceil(rows.length / rowsPerPage);
		const currentPage = page + 1; // Adding 1 because 'page' is zero-indexed

		return (
			<Typography variant="body2" style={{ margin: "0 8px", color: "gray" }}>
				Page {currentPage} of {totalPages}
			</Typography>
		);
	};

	return (
		<div className="p-4 space-y-6">
			{/* Header with Search */}
			<Card className="rounded-lg shadow-lg">
				<CardContent>
					<div className="flex items-center justify-between mb-4">
						<Typography variant="h6" className="font-bold flex items-center">
							<Badge badgeContent={5} color="error" className="mr-2">
								<Search fontSize="small" color="disabled" />
							</Badge>
							Team Leave Requests
						</Typography>
						<Typography variant="body2" color="textSecondary">
							Manage your team members leave requests here.
						</Typography>
					</div>
					<TextField
						fullWidth
						placeholder="Search"
						InputProps={{
							startAdornment: <Search className="text-gray-500" />,
							className: "bg-gray-100 rounded-full pl-2",
						}}
						variant="outlined"
						size="small"
					/>
				</CardContent>

				{rows
					.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
					.map((request, index) => (
						<Card key={index} className="rounded-lg shadow-lg">
							<CardContent>
								<div className="flex justify-between items-center">
									<Typography variant="h6" className="font-bold">
										{request.name}
									</Typography>
									<div className={`text-white px-2 py-1 rounded-full `}>
										{request.type === "PL" ? <PLIcon /> : <CLIcon />}
									</div>
								</div>
								<div className="my-2">
									<Typography variant="body2" color="textSecondary">
										From: {request.from}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										To: {request.to}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										Days: {request.days}
									</Typography>
								</div>
								<div className="flex justify-around mt-4">
									<Button
										variant="outlined"
										className="w-1/2 mr-2"
										sx={{
											color: "black !important",
											borderColor: "gray !important",
										}}
										startIcon={<CheckIcon />}
									>
										Approve
									</Button>
									<Button
										variant="outlined"
										sx={{
											color: "black !important",
											borderColor: "gray !important",
										}}
										className="w-1/2 ml-2"
										startIcon={<CrossIcon />}
									>
										Deny
									</Button>
								</div>
							</CardContent>
						</Card>
					))}

				{/* Pagination */}
				<div className="flex justify-between items-center pt-4 m-2">
					<Button
						variant="outlined"
						onClick={(event) => handleChangePage(event, page - 1)}
						disabled={page === 0}
						style={{
							marginRight: "8px",
							backgroundColor: "white",
							border: "1px solid gray",
							color: "black",
						}}
					>
						Previous
					</Button>
					{renderPageNumbers()}
					<Button
						variant="outlined"
						onClick={(event) => handleChangePage(event, page + 1)}
						disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
						style={{
							marginLeft: "8px",
							backgroundColor: "white",
							border: "1px solid gray",
							color: "black",
						}}
					>
						Next
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default MobileViewTable;
