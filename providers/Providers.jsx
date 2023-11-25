"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider>
      <ToastContainer hideProgressBar={true} autoClose={3000} />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
