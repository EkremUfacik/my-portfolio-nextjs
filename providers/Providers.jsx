"use client";

import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <ToastContainer hideProgressBar={true} autoClose={3000} />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
