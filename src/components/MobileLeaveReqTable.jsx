import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  TextField,
  Badge,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { ReactComponent as PendingIcon } from '../Assets/pending.svg'
import { ReactComponent as ApprovedIcon } from '../Assets/approved.svg'
import { ReactComponent as RejectedIcon } from '../Assets/rejected.svg'
import { ReactComponent as PLIcon } from '../Assets/PL.svg'
import { ReactComponent as CLIcon } from '../Assets/CL.svg'
import { ReactComponent as CrossIcon } from '../Assets/cross.svg'
import { ReactComponent as EyeIcon } from '../Assets/eye.svg'
import LeaveDetailsDrawer from './LeaveDetailsDrawer'
function createData(type, from, to, Days, status) {
  return { type, from, to, Days, status }
}

const leaveRequests = [
  createData('PL', '02 Jun 2024 - FH', '02 Jun 2024 - FH', 1, 'pending'),
  createData('CL', '12 Jun 2024 - FH', '17 Jun 2024 - FH', 3, 'pending'),
  createData('PL', '12 Jun 2024 - FH', '12 Jun 2024 - FH', 1, 'rejected'),
  createData('CL', '12 Jun 2024 - FH', '02 Jun 2024 - FH', 1, 'approved'),
  createData('CL', '12 Jun 2024 - FH', '17 Jun 2024 - FH', 3, 'pending'),
  createData('PL', '12 Jun 2024 - FH', '12 Jun 2024 - FH', 1, 'rejected'),
]

const MobileLeaveReqTable = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [selectedRow, setSelectedRow] = React.useState(null)

  const toggleDrawer =
    (open, row = null) =>
    () => {
      setDrawerOpen(open)
      setSelectedRow(row)
    }

  return (
    <>
      <div className="p-4 space-y-6">
        {/* Header with Search */}
        <Card className="rounded-lg shadow-lg">
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <Typography
                variant="h6"
                className="font-bold flex items-center"
              >
                <Badge
                  badgeContent={5}
                  color="error"
                  className="mr-2"
                >
                  <Search
                    fontSize="small"
                    color="disabled"
                  />
                </Badge>
                Team Leave Requests
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                Manage your team members leave requests here.
              </Typography>
            </div>
            <TextField
              fullWidth
              placeholder="Search"
              InputProps={{
                startAdornment: <Search className="text-gray-500" />,
                className: 'bg-gray-100 rounded-full pl-2',
              }}
              variant="outlined"
              size="small"
            />
          </CardContent>

          {leaveRequests.map((request, index) => (
            <Card
              key={index}
              className="rounded-lg shadow-lg"
            >
              <CardContent>
                <div className="flex justify-between items-center">
                  <Typography
                    variant="h6"
                    className="font-bold"
                  >
                    {request.type === 'PL' ? <PLIcon /> : <CLIcon />}
                  </Typography>
                  <div
                    className={`text-white px-2 py-1 rounded-full`}
                    // className={`text-white px-2 py-1 rounded-full ${
                    //   request.status === 'PL' ? 'bg-pink-500' : 'bg-blue-500'
                    // }`}
                  >
                    {request.status === 'approved' ? (
                      <ApprovedIcon />
                    ) : request.status === 'rejected' ? (
                      <RejectedIcon />
                    ) : (
                      <PendingIcon />
                    )}
                  </div>
                </div>
                <div className="my-2">
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >
                    From: {request.from}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >
                    To: {request.to}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >
                    Days: {request.Days}
                  </Typography>
                </div>
                <div className="flex justify-around mt-4">
                  <Button
                    variant="outlined"
                    className="w-1/2 mr-2 bg-white text-black-500"
                    startIcon={<EyeIcon />}
                    sx={{
                      color: 'black !important',
                      borderColor: 'gray !important',
                    }}
                    onClick={toggleDrawer(true, request)}
                  >
                    View
                  </Button>
                  {request.status === 'pending' ||
                  request.status === 'approved' ? (
                    ''
                  ) : (
                    <Button
                      variant="outlined"
                      className="w-1/2 ml-2 text-black-500"
                      startIcon={<CrossIcon />}
                      sx={{
                        color: 'black !important',
                        borderColor: 'gray !important',
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Pagination */}
        </Card>
      </div>
      {/* Drawer Component */}
      <LeaveDetailsDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        selectedRow={selectedRow}
      />
    </>
  )
}

export default MobileLeaveReqTable
