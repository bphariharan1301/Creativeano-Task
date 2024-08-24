import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { SemiCircleProgress } from "react-semicircle-progressbar";

const LeaveSummary = ({ type, remaining, availed, color }) => {
	const total = parseInt(remaining) + parseInt(availed);
  console.log("availed",availed)
  console.log("remaining",remaining)
  console.log("total",total)
  const cal = availed/total
  console.log("cal",cal)
  const percentage = Math.round(cal * 100);
  console.log("percentage", percentage);

	return (
		<Card className="flex-1 shadow-sm m-2 bg-white border border-gray-200 rounded-lg">
			<CardContent className="p-4">
				<Box className="card_data">
					<div>
						<Typography
							variant="h1"
							className="card-heading text-gray-600 cardheading"
						>
							{type}
						</Typography>
						<Typography variant="h4" className="text-gray-800 mt-2">
							{remaining}{" "}
							<span className="remaining text-gray-500">Remaining</span>
						</Typography>
					</div>
					<div className="mt-4 flex justify-center items-center">
						<SemiCircleProgress
							percentage={percentage}
							size={{
								width: 200,
								height: 100, // Set height to half the width for a semi-circle effect
							}}
							strokeWidth={10}
							strokeColor={color}
						>
							<span style={{ fontSize: 32, color: color }}>{`${Math.round(
								percentage
							)}%`}</span>
						</SemiCircleProgress>
					</div>
				</Box>
				<Typography className="avilable text-right text-sm mt-2 text-gray-500">
					{availed} Availed
				</Typography>
			</CardContent>
		</Card>
	);
};

export default LeaveSummary;
