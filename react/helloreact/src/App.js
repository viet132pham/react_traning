import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import CategoryDetail from "./components/CategoryDetail";
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import useUserAuth from "./context/useUseAuth";
import RequireAuth from './auth/RequireAuth';

const App = () => {
  const { state } = useUserAuth();
  console.log(state);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route exact path="/Home" element={<Home />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route exact path="/CategoryDetail" element={<CategoryDetail />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route exact path="/add-employee/:id" element={<CreateEmployeeComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
