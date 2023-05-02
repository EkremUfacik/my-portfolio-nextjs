import "@/styles/globals.scss";
import ThemeProvider from "../context/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
