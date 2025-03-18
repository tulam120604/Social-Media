import { Route, Routes } from "react-router-dom";
import Layout_client from "../layouts/client";
import Layout_admin from "../layouts/admin";
import Home_page from "../pages/client/home/page";
import Signin_page from "../pages/auth/signin";
import Signup_page from "../pages/auth/signup";

export default function Routes_page() {
  return (
    <Routes>
      {/* client */}
      <Route path="/" element={<Layout_client />}>
        <Route index element={<Home_page />} />
        <Route path="/sign-in" element={<Signin_page />} />
        <Route path="/sign-up" element={<Signup_page />} />
      </Route>

      {/* admin */}
      <Route path="/adminstration" element={<Layout_admin />}></Route>
    </Routes>
  );
}
