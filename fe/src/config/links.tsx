import {
  CircleUser,
  Flame,
  Gamepad2,
  History,
  House,
  MonitorCheck,
  Music,
  Trophy,
  TvMinimalPlay,
} from "lucide-react";

export const urls_sidebar = [
  {
    name: "Home",
    path: "/",
    icon: <House strokeWidth={1.7} />,
  },
  {
    name: "Shorts",
    path: "/shorts",
    icon: <TvMinimalPlay strokeWidth={1.7} />,
  },
  {
    name: "Subscribe",
    path: "/subscribe",
    icon: <MonitorCheck strokeWidth={1.7} />,
  },
  {
    name: "You",
    path: "/you",
    icon: <CircleUser strokeWidth={1.7} />,
  },
  {
    name: "History",
    path: "/history",
    icon: <History strokeWidth={1.7} />,
  },
];

// uri kham pha
export const urls_explore = [
  {
    name: "Trending",
    path: "/trending",
    icon: <Flame strokeWidth={1.7} />,
  },
  {
    name: "Music",
    path: "/music",
    icon: <Music strokeWidth={1.7} />,
  },
  {
    name: "Gaming",
    path: "/gaming",
    icon: <Gamepad2 strokeWidth={1.7} />,
  },
  {
    name: "Sports",
    path: "/sport",
    icon: <Trophy strokeWidth={1.7} />,
  },
];

// copyright
export const copyrights = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Press",
    path: "/",
  },
  {
    name: "Copyright",
    path: "/",
  },
  {
    name: "Contact us",
    path: "/",
  },
  {
    name: "Creators",
    path: "/",
  },
  {
    name: "Advertise",
    path: "/",
  },
  {
    name: "Developers",
    path: "/",
  },
  {
    name: "Teams",
    path: "/",
  },
  {
    name: "Privacy",
    path: "/",
  },
  {
    name: "Policy $ Safery",
    path: "/",
  },
];

// link menu demo
export const link_menu = [
  {
    name: "Tất cả",
    catalog: "all",
  },
  {
    name: "Thể thao",
    catalog: "sport",
  },
  {
    name: "Trò chơi",
    catalog: "gaming",
  },
  {
    name: "iOS",
    catalog: "ios",
  },
  {
    name: "Android",
    catalog: "android",
  },
  {
    name: "ReactJs",
    catalog: "reactjs",
  },
  {
    name: "NextJs",
    catalog: "nextjs",
  },
  {
    name: "Javascript",
    catalog: "javascript",
  },
  {
    name: "NodeJs",
    catalog: "nodejs",
  },
  {
    name: "Typescript",
    catalog: "typescript",
  },
  {
    name: "Playlists",
    catalog: "playlists",
  },
];
