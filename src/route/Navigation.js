import React from "react";
import Home from "../home/Home";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";
import StudentPart from "../student";

function Navigation() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/student" element={<StudentPart />} />
        <Route exact path="*" element={<h1>Nothing to see yet</h1>} />
      </Routes>
    </div>
  );
}

export default Navigation;
