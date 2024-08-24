import React, { useRef } from "react";
import Slider from "react-slick";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import YearSelector from "./YearSelector";
import ApplyLeaveButton from "./ApplyLeaveButton";
import LeaveSummary from "./LeaveSummary";
import {
	Box,
	Button,
	Stack,
	Typography,
	InputAdornment,
	IconButton,
} from "@mui/material";
import Calendar from "./Calendar";
import DashboardTable from "./DashboardTable";
import { ReactComponent as PrevIcon } from "../Assets/Icon.svg";
import { ReactComponent as NextIcon } from "../Assets/arrow-right.svg";
import { ReactComponent as UsersIcon } from "../Assets/users-icon.svg";
import { ReactComponent as UserIcon } from "../Assets/user-pic.svg";
import { ReactComponent as RequestChip } from "../Assets/requests-chip.svg";
import { ReactComponent as SearchIcon } from "../Assets/search-icon.svg";
import LeaveReqTable from "./LeaveReqTable";
import MobileViewTable from "./MobileViewTable";
import LeaveSlider from "./LeaveCard";
import MobileLeaveReqTable from "./MobileLeaveReqTable";
const DashboardSection = () => {
	const sliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3.5, // Default value for desktop
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1224, // Tablet view breakpoint
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 900, // Tablet view breakpoint
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768, // Mobile view breakpoint (if needed)
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const handleNext = () => {
		sliderRef.current.slickNext();
	};

	const handlePrev = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<div className="p-6 bg-gray-50 relative">
			<div className="flex justify-between items-center mb-4">
				<div className="flex items-center space-x-4">
					<YearSelector />
					<ApplyLeaveButton />
				</div>
			</div>
			<div className="flex desktop-view">
				<div className="mb-4">
					<Slider ref={sliderRef} {...settings}>
						<LeaveSummary
							type="Casual Leave"
							remaining={8}
							availed={4}
							color="green"
						/>
						<LeaveSummary
							type="Privilege"
							remaining={11}
							availed={3}
							color="blue"
						/>
						<LeaveSummary
							type="Sick Leave"
							remaining={3}
							availed={1}
							color="red"
						/>
						<LeaveSummary
							type="Comp off"
							remaining={2}
							availed={1}
							color="orange"
						/>
						<LeaveSummary
							type="Casual Leave"
							remaining={8}
							availed={4}
							color="green"
						/>
						<LeaveSummary
							type="Privilege"
							remaining={11}
							availed={3}
							color="blue"
						/>
						<LeaveSummary
							type="Sick Leave"
							remaining={3}
							availed={1}
							color="red"
						/>
						<LeaveSummary
							type="Comp off"
							remaining={2}
							availed={1}
							color="orange"
						/>
					</Slider>
				</div>
				<div className="flex flex-col space-y-4 justify-center items-center">
					<Button
						variant="contained"
						onClick={handlePrev}
						sx={{
							backgroundColor: "#ffff",
							padding: "12px 24px",
							fontSize: "16px",
							"&:hover": {
								backgroundColor: "darkgrey", // Adjust the hover color if needed
							},
						}}
					>
						<PrevIcon style={{ width: "24px", height: "24px" }} />
					</Button>

					<Button
						variant="contained"
						onClick={handleNext}
						sx={{
							backgroundColor: "#ffff",
							padding: "12px 24px",
							fontSize: "16px",
							marginLeft: "8px", // Adds space between the buttons
							"&:hover": {
								backgroundColor: "darkgrey", // Adjust the hover color if needed
							},
						}}
					>
						<NextIcon style={{ width: "24px", height: "24px" }} />
					</Button>
				</div>
			</div>
			<Stack direction={"row"} gap={3} className="desktop-view">
				<div className="Table1 Table1 border border-gray-300 rounded-md">
					<div id="dashboard-table-header">
						<Box>
							<Stack direction={"row"} gap={2}>
								<Stack
									direction={"row"}
									gap={2}
									alignItems={"center"}
									className="p-2"
								>
									<UsersIcon />
									<Box>
										<Stack direction={"column"}>
											<Stack direction={"row"} gap={3}>
												<Typography
													variant="body"
													className="text-gray-800 mt-2"
												>
													Team Leave Requests
												</Typography>
												<RequestChip />
											</Stack>
											<Box>
												<Typography className="text-gray-500 mt-2">
													Manage your team members leave requests here.
												</Typography>
											</Box>
										</Stack>
									</Box>
								</Stack>
								<FormControl
									sx={{ m: 1, width: "25ch", p: 2 }}
									variant="outlined"
								>
									<OutlinedInput
										id="outlined-adornment-password"
										type={"text"}
										size={"small"}
										endAdornment={
											<InputAdornment position="start">
												<IconButton
													aria-label="toggle password visibility"
													edge="end"
												>
													<SearchIcon />
												</IconButton>
											</InputAdornment>
										}
										placeholder="Search"
									/>
								</FormControl>
							</Stack>
						</Box>
					</div>
					<DashboardTable />
				</div>
				<div className="Table1 Table1 border border-gray-300 rounded-md">
					<div id="dashboard-table-header">
						<Box>
							<Stack direction={"row"} gap={2}>
								<Stack
									direction={"row"}
									gap={4}
									alignItems={"center"}
									className="p-2"
								>
									<UserIcon />
									<Box>
										<Stack direction={"column"}>
											<Stack direction={"row"} gap={3}>
												<Typography
													variant="body"
													className="text-gray-800 mt-2"
												>
													My Leave Request
												</Typography>
											</Stack>
											<Box>
												<Typography className="text-gray-500 mt-2">
													Check your leave requests here
												</Typography>
											</Box>
										</Stack>
									</Box>
								</Stack>
							</Stack>
						</Box>
					</div>
					<LeaveReqTable />
				</div>
			</Stack>
			<div className="mobile-view">
				<Stack direction={"column"}>
					<LeaveSlider />
					<MobileViewTable />
					<MobileLeaveReqTable />
				</Stack>
			</div>
			<div className="calender-container border border-gray-300 rounded-md">
				<div id="dashboard-table-header">
					<Box>
						<Stack direction={"row"} gap={2}>
							<Stack
								direction={"row"}
								gap={4}
								alignItems={"center"}
								className="p-2"
							>
								<Box>
									<Stack className="p-3" direction={"column"}>
										<Stack direction={"row"} gap={3}>
											<Typography variant="body" className="text-gray-800 mt-2">
												Leave Deatails
											</Typography>
										</Stack>
										<Box>
											<Typography className="text-gray-500 mt-2">
												Check your team leave Detail here
											</Typography>
										</Box>
									</Stack>
								</Box>
							</Stack>
						</Stack>
					</Box>
				</div>
				<Calendar />
			</div>
		</div>
	);
};

export default DashboardSection;
