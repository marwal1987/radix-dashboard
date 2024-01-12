import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
// import { ThemeProvider } from 'next-themes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider attribute="dark-theme"> */}
    <Theme>
      <App />
      {/* <ThemePanel /> */}
    </Theme>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
