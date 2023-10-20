// src/components/Table.js
import React, { useState } from 'react';
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Tabs,
  Tab,
  Stack,
  Box,
  Typography,
  Drawer,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';

function getGroup(tabIndex) {
  switch (tabIndex) {
    case 0:
      return 'A';
    case 1:
      return 'B';
    case 2:
      return 'C';
    default:
      return '';
  }
}

function isLater(timeString, status) {
  if (!timeString) return false; // 如果 timeString 是 null 或 undefined，返回 false

  const time = new Date(`1970-01-01T${timeString.split(' ')[1]}Z`);
  const comparisonTime = new Date('1970-01-01T06:40:00Z');

  return status ? false : time > comparisonTime;
}

function isEmpty(value) {
  return value === null || value === undefined || value === '';
}

// 定義一個函式來計算每組的統計數字
function getGroupCount(data, group) {
  const groupData = data.filter((row) => row['組別'] === group);
  const totalCount = groupData.length;

  const presentCount = groupData.filter(
    (row) => row.time && isEmpty(row.status) && isLater(row.time, row.status)
  ).length;

  const lateCount = groupData.filter((row) => {
    if (row.time && !row.status) {
      const [hours, minutes] = row.time.split(' ')[1].split(':').map(Number);
      return (hours >= 6 && minutes > 40) || hours > 6;
    }
    return false;
  }).length;

  const leaveCount = groupData.filter((row) => row.status).length;
  // console.log(
  //   'presentCount',
  //   groupData.filter((row) => row.time && isEmpty(row.status))
  // );
  const ret = `${totalCount} | ${presentCount} | ${lateCount} | ${leaveCount}`;

  return ret;
}

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
  const dd = String(date.getDate()).padStart(2, '0');

  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

function Table({ data }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false); // 新狀態控制抽屜的開/關
  const [selectedRow, setSelectedRow] = useState(null); // 新狀態保存選中的行的資料

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row); // 保存選中的行的資料
    setDrawerOpen(true); // 打開抽屜
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false); // 關閉抽屜
  };

  const filteredData = data.filter((row) => row['組別'] === getGroup(selectedTab));

  // console.log('Table data=', data, filteredData);

  return (
    <>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab
          label={
            <Box>
              A 組
              <Typography variant="caption" display="block" gutterBottom fontSize={10}>
                {getGroupCount(data, 'A')}
              </Typography>
            </Box>
          }
        />
        <Tab
          label={
            <Box>
              B 組
              <Typography variant="caption" display="block" gutterBottom fontSize={10}>
                {getGroupCount(data, 'B')}
              </Typography>
            </Box>
          }
        />
        <Tab
          label={
            <Box>
              C 組
              <Typography variant="caption" display="block" gutterBottom fontSize={10}>
                {getGroupCount(data, 'C')}
              </Typography>
            </Box>
          }
        />
      </Tabs>
      <TableContainer style={{ maxWidth: '100%' }}>
        <MUITable>
          <TableHead>
            <TableRow>
              <TableCell style={{ flexGrow: 1 }}>姓名</TableCell>
              <TableCell style={{ flexGrow: 1 }}>班級</TableCell>
              <TableCell style={{ flexGrow: 1 }}>簽到時間</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => {
              const checkinTime = row.status ? row.status : row.time ? row.time.split(' ')[1].substring(0, 5) : '';
              const timeColor = isLater(row.time, row.status) ? 'red' : 'black';
              return (
                <TableRow key={row['編號']} onClick={() => handleRowClick(row)}>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        src="https://orz.tw/jnps/avatars/test.png"
                        style={{ width: 60, height: 60, border: 0 }}
                        variant="square"
                      />
                      <Box display="flex" alignItems="center" height="100%">
                        <Typography style={{ fontSize: 20 }}>{row['姓名']}</Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>{row['班級']}</TableCell>
                  <TableCell>
                    <Typography style={{ color: timeColor }}>{checkinTime}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </MUITable>
      </TableContainer>
      <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6">{selectedRow ? selectedRow['姓名'] : ''}</Typography>
          <Typography>{selectedRow?.time ? selectedRow.time : formatDate(new Date())}</Typography>
          <FormControlLabel control={<Checkbox />} label="補簽" />
          <FormControlLabel control={<Checkbox />} label="請假" />
          <TextField label="備註" multiline fullWidth />
          <Stack direction="row" spacing={2} alignItems="center" mt={2}>
            <Button variant="contained" color="primary" onClick={handleDrawerClose}>
              確認簽到
            </Button>
            <Button variant="outlined" onClick={handleDrawerClose}>
              取消
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

export default React.memo(Table);
