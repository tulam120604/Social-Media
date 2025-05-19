import { Route, Routes } from "react-router-dom";
import { Layout_client, Layout_client_with_sidebar } from "../layouts/client";
import Layout_admin from "../layouts/admin";
import Home_page from "../pages/client/home/page";
import Signin_page from "../pages/auth/signin";
import Signup_page from "../pages/auth/signup";
import Profile_page from "../pages/client/profile/page";
import { PrivateRouter, PublicRouter } from "../layouts/auth";
import Friends_page from "../pages/client/friends/page";
import Group_page from "../pages/client/groups/page";

export default function Routes_page() {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        {/* client */}
        <Route path="/" element={<Layout_client />}>
          <Route path="/" element={<Layout_client_with_sidebar />}>
            <Route index element={<Home_page />} />
            <Route path="/friends" element={<Friends_page />} />

            {/* profile */}
            <Route path="/profile/:id" element={<Profile_page />} />
            <Route path="/profile/groups" element={<Group_page />} />
          </Route>
        </Route>

        {/* admin */}
        <Route path="/adminstration" element={<Layout_admin />}></Route>
      </Route>

      {/* auth */}
      <Route element={<PublicRouter />}>
        <Route path="/sign-in" element={<Signin_page />} />
        <Route path="/sign-up" element={<Signup_page />} />
      </Route>
    </Routes>
  );
}
