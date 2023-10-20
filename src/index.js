import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Table from './components/Table';
import CheckIn from './components/CheckIn';
import theme from './theme';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const Pages = React.memo(function Pages() {
  // console.log('Pages rendered');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetch('https://orz.tw/jnps/query.php')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
      })
      .then((json) => {
        console.log('query=', json);
        setRows(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };
  const handleConfirm = (row) => {
    // ... other logic
  };

  if (loading) {
    return (
      <Box>
        <CircularProgress size={80} />
      </Box>
    );
  }

  return (
    <Routes>
      <Route
        path="checkin/signin"
        element={<CheckIn data={selectedRow} onConfirm={() => handleConfirm(navigate)} />}
      />
      <Route path="checkin/" element={<Table data={rows} onRowClick={handleRowClick} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
});

function NotFound() {
  const navigate = useNavigate();

  // 使用 useEffect 來確保在組件渲染後立即執行重定向
  React.useEffect(() => {
    navigate('/checkin/'); // 修改此處
  }, [navigate]);

  return null; // 此組件不會渲染任何內容
}

const App = React.memo(function App() {
  return (
    <Router basename="/jnps">
      <Pages />
    </Router>
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
