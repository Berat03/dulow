import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from "./pages/homePage.tsx";
import "./index.css"; // Make sure this line is not removed

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
