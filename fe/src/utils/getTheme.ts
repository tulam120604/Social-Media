import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const checkDarkMode = () => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);
  };

  useEffect(() => {
    // Kiểm tra chế độ theme khi component mount
    checkDarkMode();

    // Lắng nghe sự thay đổi của theme
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', checkDarkMode);

    // Cleanup listener khi component unmount
    return () => {
      darkModeQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  return isDarkMode;
};

export default useDarkMode;