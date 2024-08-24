import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactComponent as CheckIcon } from "../Assets/check.svg";
import { ReactComponent as CrossIcon } from "../Assets/cross.svg";
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

export default function DashboardTable() {
	const [page, setPage] = React.useState(0);
	const rowsPerPage = 5;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const renderPageNumbers = () => {
		const totalPages = Math.ceil(rows.length / rowsPerPage);
		const pageNumbers = [];

		const maxVisiblePages = 4;
		const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

		const startPage = Math.max(0, page - halfMaxVisiblePages);
		const endPage = Math.min(totalPages - 1, page + halfMaxVisiblePages);

		if (startPage > 0) {
			pageNumbers.push(
				<Button
					key={0}
					variant="text"
					onClick={() => handleChangePage(null, 0)}
					style={{
						margin: "0 4px",
						minWidth: "36px",
						padding: "4px 8px",
						fontSize: "14px",
						borderRadius: "8px",
						backgroundColor: 0 === page ? "#fce4ec" : "transparent",
						color: 0 === page ? "black" : "gray",
						border: 0 === page ? "1px solid gray" : "none",
					}}
				>
					1
				</Button>
			);
			if (startPage > 1) {
				pageNumbers.push(
					<Button
						key="ellipsis-start"
						variant="text"
						disabled
						style={{
							margin: "0 4px",
							minWidth: "36px",
							padding: "4px 8px",
							fontSize: "14px",
							borderRadius: "8px",
							color: "gray",
						}}
					>
						...
					</Button>
				);
			}
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(
				<Button
					key={i}
					variant="text"
					onClick={() => handleChangePage(null, i)}
					style={{
						margin: "0 4px",
						minWidth: "36px",
						padding: "4px 8px",
						fontSize: "14px",
						borderRadius: "8px",
						backgroundColor: i === page ? "#fce4ec" : "transparent",
						color: i === page ? "black" : "gray",
						border: i === page ? "1px solid gray" : "none",
					}}
				>
					{i + 1}
				</Button>
			);
		}

		if (endPage < totalPages - 1) {
			if (endPage < totalPages - 2) {
				pageNumbers.push(
					<Button
						key="ellipsis-end"
						variant="text"
						disabled
						style={{
							margin: "0 4px",
							minWidth: "36px",
							padding: "4px 8px",
							fontSize: "14px",
							borderRadius: "8px",
							color: "gray",
						}}
					>
						...
					</Button>
				);
			}
			pageNumbers.push(
				<Button
					key={totalPages - 1}
					variant="text"
					onClick={() => handleChangePage(null, totalPages - 1)}
					style={{
						margin: "0 4px",
						minWidth: "36px",
						padding: "4px 8px",
						fontSize: "14px",
						borderRadius: "8px",
						backgroundColor:
							totalPages - 1 === page ? "#fce4ec" : "transparent",
						color: totalPages - 1 === page ? "black" : "gray",
						border: totalPages - 1 === page ? "1px solid gray" : "none",
					}}
				>
					{totalPages}
				</Button>
			);
		}

		return pageNumbers;
	};

	return (
		<ThemeProvider
			theme={createTheme({
				palette: {
					primary: {
						main: "#1976d2",
					},
					secondary: {
						main: "#dc004e",
					},
				},
			})}
		>
			<div className="">
				<TableContainer component={Paper}>
					<Table sx={{}} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell align="center">Type</TableCell>
								<TableCell align="center">From</TableCell>
								<TableCell align="center">To</TableCell>
								<TableCell align="center">Days</TableCell>
								<TableCell align="center">Decision</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => (
									<TableRow key={index}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="center">
											{row.type === "PL" ? <PLIcon /> : <CLIcon />}
										</TableCell>
										<TableCell align="center">{row.from}</TableCell>
										<TableCell align="center">{row.to}</TableCell>
										<TableCell align="center">{row.Days}</TableCell>
										<TableCell align="center">
											<Stack direction="row">
												<span className="border border-gray-300 rounded p-1">
													<CheckIcon className="text-green-500" />
												</span>
												<span className="border border-gray-300 rounded p-1 ml-2">
													<CrossIcon className="text-red-500" />
												</span>
											</Stack>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
					<div className="flex justify-between items-center w-full px-4 py-2">
						<Button
							variant="outlined"
							onClick={(event) => handleChangePage(event, page - 1)}
							disabled={page === 0}
							style={{
								marginRight: "8px",
								backgroundColor: "white", // White background for "Previous" button
								border: "1px solid gray", // Gray border for "Previous" button
								color: "black",
							}}
						>
							Previous
						</Button>
						<div className="flex">{renderPageNumbers()}</div>
						<Button
							variant="outlined"
							onClick={(event) => handleChangePage(event, page + 1)}
							disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
							style={{
								marginLeft: "8px",
								backgroundColor: "white", // White background for "Next" button
								border: "1px solid gray", // Gray border for "Next" button
								color: "black",
							}}
						>
							Next
						</Button>
					</div>
				</TableContainer>
			</div>
		</ThemeProvider>
	);
}
