import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import UserDetails from "../pages/UserDetails";
import Users from "../pages/UsersList";

const MyRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </Layout>
  );
};

export default MyRoutes;
