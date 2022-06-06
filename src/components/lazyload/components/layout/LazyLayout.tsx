import { NavLink, Route, Routes } from "react-router-dom";
import LazyPageOne from "../../pages/LazyPageOne";
import LazyPageThree from "../../pages/LazyPageThree";
import LazyPageTwo from "../../pages/LazyPageTwo";

const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout </h1>

      <hr />

      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPageOne />} />
        <Route path="lazy2" element={<LazyPageTwo />} />
        <Route path="lazy3" element={<LazyPageThree />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
