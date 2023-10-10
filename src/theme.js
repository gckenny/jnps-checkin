import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontSize: 16,  // 這裡設置基本字型大小，預設值是 14
  },
});

theme.components.Button = {
  styleOverrides: {
    root: {
      padding: '12px 20px',  // 为按钮增加更多填充
    },
    label: {
      fontSize: '2rem',  // 這裡設置按鈕字型大小
    },
  },
};

export default theme;
