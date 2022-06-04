import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import {
  LazyPageOne,
  LazyPageThree,
  LazyPageTwo,
} from "../components/lazyload/pages";

import { CustomLink } from "./../components/CustomLink";
import logo from "./../logo.svg";

export const Navigation = () => {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />

          <ul>
            <li>
              <CustomLink to="/lazy-1">Lazy 1</CustomLink>
            </li>
            <li>
              <CustomLink to="/lazy-2">Lazy 2</CustomLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/lazy-3"
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy-1" element={<LazyPageOne />} />
          <Route path="lazy-2" element={<LazyPageTwo />} />
          <Route path="lazy-3" element={<LazyPageThree />} />

          <Route path="/*" element={<Navigate to="/lazy-1" replace />} />
        </Routes>
      </div>
    </>
  );
};
