import { Route, Routes } from "react-router-dom";
import { Layout_client, Layout_client_with_sidebar } from "../layouts/client";
import Layout_admin from "../layouts/admin";
import Home_page from "../pages/client/home/page";
import Signin_page from "../pages/auth/signin";
import Signup_page from "../pages/auth/signup";
import Watch_video_page from "../pages/client/watch-video/page";
import Trending_page from "../pages/client/trending/page";
import Music_page from "../pages/client/music/page";
import Gaming_page from "../pages/client/gaming/page";
import Sport_page from "../pages/client/sport/page";
import New_page from "../pages/client/new/page";

export default function Routes_page() {
  return (
    <Routes>
      {/* client */}
      <Route path="/" element={<Layout_client />}>
        <Route path="/" element={<Layout_client_with_sidebar />}>
          <Route index element={<Home_page />} />
          <Route path="/trending" element={<Trending_page />} />
          <Route path="/music" element={<Music_page />} />
          <Route path="/gaming" element={<Gaming_page />} />
          <Route path="/sport" element={<Sport_page />} />
          <Route path="/news" element={<New_page />} />
        </Route>
        <Route path="/watch" element={<Watch_video_page />} />

        {/* profile */}
        <Route path="/sign-in" element={<Signin_page />} />
        <Route path="/sign-up" element={<Signup_page />} />
      </Route>

      {/* admin */}
      <Route path="/adminstration" element={<Layout_admin />}></Route>
    </Routes>
  );
}
