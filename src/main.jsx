import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'

import Layout from "./app/routes/Layout.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/portfolio/" element={<Layout />}>
              <Route index={true} element={<App />} />
          </Route>
              </Routes>
      </BrowserRouter>
  </StrictMode>
)
