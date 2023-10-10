// src/components/Table.js
import React from 'react';
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function Table({ data, onRowClick }) {
  const formatCheckinTime = (time) => {
    // 將 ISO 8601 格式的日期時間字符串轉換為 m/d HH:ii 格式
    const date = new Date(time);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <TableContainer style={{ maxWidth: '100%' }}>
      <MUITable>
        <TableHead>
          <TableRow>
            <TableCell style={{ flexGrow: 1 }}>序</TableCell>
            <TableCell style={{ flexGrow: 1 }}>姓名</TableCell>
            <TableCell style={{ flexGrow: 1 }}>組別</TableCell>
            <TableCell style={{ flexGrow: 1 }}>班級</TableCell>
            <TableCell style={{ flexGrow: 1 }}>簽到時間</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} onClick={() => onRowClick(row)}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.group}</TableCell>
              <TableCell>{row.class}</TableCell>
              <TableCell>{row.checkinTime ? formatCheckinTime(row.checkinTime) : ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
}

export default Table;
