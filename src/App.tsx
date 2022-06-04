import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import "./App.css";
import { CustomLink } from "./components/CustomLink";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />

          <ul>
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>} />
          <Route path="/" element={<h1>Home Page</h1>} />

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
