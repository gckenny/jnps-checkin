// src/index.js
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Table from "./components/Table";
import CheckIn from "./components/CheckIn";
import theme from "./theme";
import { format } from "date-fns";

function Pages({ data, setData, handleConfirm }) {
  const navigate = useNavigate(); // 获取 navigate 函数

  const handleRowClick = (row) => {
    setData({ ...data, selectedRow: row });
    navigate("/checkin"); // 导航到 /checkin 路由
  };

  return (
    <Routes>
      <Route path='/checkin' element={<CheckIn {...data.selectedRow} onConfirm={() => handleConfirm(navigate)} />} />
      <Route path='/' element={<Table data={data.rows} onRowClick={handleRowClick} />} />
    </Routes>
  );
}

function createFakeData() {
  const fakeData = [];
  for (let i = 1; i <= 20; i++) {
    fakeData.push({
      id: i,
      name: `姓名${i}`,
      group: i % 2 === 0 ? "A" : "B",
      gender: i % 2 === 0 ? "M" : "F",
      class: `${i * 100 >= 1000 ? (i * 100) / 10 : i * 100}`,
      checkinTime: null,
    });
  }
  return fakeData;
}

function App() {
  const [data, setData] = useState({ rows: createFakeData(), selectedRow: null });
  const handleConfirm = (navigate) => {
    // ... 确认签到的逻辑 ...
    const newData = data.rows.map((row) => {
      if (row.id === data.selectedRow.id) {
        // 使用 selectedRow.id 而不是传递的 id
        const checkinTime = format(new Date(), "M/d HH:mm");
        return { ...row, checkinTime: checkinTime }; // 更新签到时间
      }
      return row;
    });
    setData({ ...data, rows: newData }); // 更新数据状态
    navigate("/"); // 如果需要，您可以在此导航回表格页面
  };
  return (
    <Router>
      <Pages data={data} setData={setData} handleConfirm={handleConfirm} />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
