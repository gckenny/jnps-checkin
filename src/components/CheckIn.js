import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material'; // 引入 Container 和 Box 來組織佈局
import { format } from 'date-fns';

function CheckIn({ id, name, onConfirm, data }) {
  const navigate = useNavigate();
  const checkinTime = format(new Date(), 'M/d HH:mm');
  const handleBack = () => {
    navigate('/jnps/checkin/');
  };
  console.log('data=', data);
  useEffect(() => {
    if (!name) {
      navigate('/jnps/checkin/');
    }
  }, [name, navigate]);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Box>姓名</Box>
        <Box>{name}</Box>
        <Box>簽到時間</Box>
        <Box>{checkinTime}</Box>
        <Box>
          <Button variant="contained" color="primary" onClick={() => onConfirm(id)}>
            確認簽到
          </Button>

          <Button variant="outlined" color="secondary" onClick={handleBack} style={{ marginLeft: '10px' }}>
            返回
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default CheckIn;
