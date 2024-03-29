/* eslint-disable @next/next/no-page-custom-font */
"use client";
import "./globals.css";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./redux/store";
import MyDrawer from "./components/MyDrawer";
const theme = createTheme({});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideCardsToggle, setSideCardsToggle] = useState("");
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body style={{ width: "100%" }}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MyDrawer
              sideCardsToggle={sideCardsToggle}
              setSideCardsToggle={setSideCardsToggle}
            />
            <div onClick={() => setSideCardsToggle("")}>{children}</div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
