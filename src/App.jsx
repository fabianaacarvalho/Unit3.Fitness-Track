import { Routes, Route } from "react-router";

import Layout from "./layout/Layout.jsx";
import ActivitiesPage from "./activities/ActivitiesPage";
import ActivityDetailsPage from "./activities/ActivityDetailsPage";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ActivitiesPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/activities/:id" element={<ActivityDetailsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}
