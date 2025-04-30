import { Route, Routes } from "react-router-dom";
import { Layout_client, Layout_client_with_sidebar } from "../layouts/client";
import Layout_admin from "../layouts/admin";
import Home_page from "../pages/client/home/page";
import Signin_page from "../pages/auth/signin";
import Signup_page from "../pages/auth/signup";
import Profile_page from "../pages/client/profile/page";

export default function Routes_page() {
  return (
    <Routes>
      {/* client */}
      <Route path="/" element={<Layout_client />}>
        <Route path="/" element={<Layout_client_with_sidebar />}>
          <Route index element={<Home_page />} />
        </Route>

        {/* profile */}
        <Route path="/profile/:id" element={<Profile_page />} />
      </Route>

      {/* auth */}
      <Route path="/sign-in" element={<Signin_page />} />
      <Route path="/sign-up" element={<Signup_page />} />

      {/* admin */}
      <Route path="/adminstration" element={<Layout_admin />}></Route>
    </Routes>
  );
}
