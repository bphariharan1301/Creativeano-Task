import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "./Calendar.css";
import { Box, Divider } from "@mui/material";

const Calendar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [popoverContent, setPopoverContent] = useState(null);
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const generateWeekoffEvents = () => {
			const weekoffEvents = [];
			const year = 2024;
			const month = 7; // August (0-indexed, so 7 is August)
			const daysInMonth = new Date(year, month + 1, 0).getDate();

			for (let day = 1; day <= daysInMonth; day++) {
				const date = new Date(year, month, day);
				const dayOfWeek = date.getDay();

				if (dayOfWeek === 0 || dayOfWeek === 1) {
					// 0 = Sunday
					weekoffEvents.push({
						title: "Weekly Off",
						start: date.toISOString().split("T")[0],
						color: "#FFE5C5",
					});
				}
			}
			return weekoffEvents;
		};

		// Existing events
		const existingEvents = [
			{ title: "Murugan - PL", start: "2024-08-05", color: "#FFCDD2" },
			{ title: "Balaji - PL", start: "2024-08-08", color: "#FFCDD2" },
			{ title: "Lokesh - CL", start: "2024-08-07", color: "#BBDEFB" },
			{ title: "Ashok - CL", start: "2024-08-12", color: "#BBDEFB" },
			{ title: "Holiday", start: "2024-08-26", color: "#BBDEFB" },
			{ title: "Murugan - PL", start: "2024-08-05", color: "#FFCDD2" },
			{ title: "Balaji - PL", start: "2024-08-08", color: "#FFCDD2" },
			{ title: "Lokesh - CL", start: "2024-08-07", color: "#BBDEFB" },
			{ title: "Ashok - CL", start: "2024-08-12", color: "#BBDEFB" },
			{ title: "Holiday", start: "2024-08-26", color: "#BBDEFB" },
		];

		// Combine weekoff events with existing events
		setEvents([...generateWeekoffEvents(), ...existingEvents]);
	}, []);

	const handleEventClick = (eventInfo) => {
		setAnchorEl(eventInfo.el);
		setPopoverContent(eventInfo.event.title);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setPopoverContent(null);
	};

	const open = Boolean(anchorEl);

	return (
		<div className="calendar-container">
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				events={events}
				headerToolbar={{
					left: "prev",
					center: "title",
					right: "next",
				}}
				titleFormat={{ year: "numeric", month: "long" }}
				eventContent={(eventInfo) => (
					<div
						className="event-content"
						style={{ backgroundColor: eventInfo.event.extendedProps.color }}
						onClick={() => handleEventClick(eventInfo)}
					>
						{eventInfo.event.title}
					</div>
				)}
				eventClick={handleEventClick}
			/>
			<Popover
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				// anchorOrigin={{
				// 	vertical: "bottom",
				// 	horizontal: "center",
				// }}
				// transformOrigin={{
				// 	vertical: "top",
				// 	horizontal: "center",
				// }}
			>
				<Box className="p-2">
					<Typography variant="body1" className="p-1 text-black">
						No. of CL - 3
					</Typography>
					<Typography variant="body1" className="p-1 text-black">
						Suresh
					</Typography>
					<Typography variant="body1" className="p-1 text-black">
						Senthil
					</Typography>
					<Typography variant="body1" className="p-1 text-black">
						Ashok
					</Typography>
				</Box>
				<Box className="m-1">
					<Divider className="m-1" />
				</Box>
				<Box className="p-2">
					<Typography variant="body1" className="p-1 text-black">
						No. of PL - 3
					</Typography>
					<Typography variant="body1" className="p-1 text-black">
						Mani
					</Typography>
					<Typography variant="body1" className="p-1 text-black">
						Ashok
					</Typography>
					<Typography variant="body1" className="p-1 text-black">
						Senthil
					</Typography>
				</Box>
			</Popover>
		</div>
	);
};

export default Calendar;
