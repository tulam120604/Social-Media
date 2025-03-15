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
    name: "Trang chủ",
    path: "/",
    icon: <House strokeWidth={1.7} />,
  },
  {
    name: "Shorts",
    path: "/shorts",
    icon: <TvMinimalPlay strokeWidth={1.7} />,
  },
  {
    name: "Đăng ký",
    path: "/subscribe",
    icon: <MonitorCheck strokeWidth={1.7} />,
  },
  {
    name: "Tôi",
    path: "/you",
    icon: <CircleUser strokeWidth={1.7} />,
  },
  {
    name: "Lịch sử",
    path: "/history",
    icon: <History strokeWidth={1.7} />,
  },
];

// uri kham pha
export const urls_explore = [
  {
    name: "Xu hướng",
    path: "/trending",
    icon: <Flame strokeWidth={1.7} />,
  },
  {
    name: "Âm nhạc",
    path: "/music",
    icon: <Music strokeWidth={1.7} />,
  },
  {
    name: "Trò chơi",
    path: "/gaming",
    icon: <Gamepad2 strokeWidth={1.7} />,
  },
  {
    name: "Thể thao",
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
    name : 'Tất cả',
    catalog : 'all'
  },
  {
    name : 'Thể thao',
    catalog : ''
  },
  {
    name : 'Trò chơi',
    catalog : ''
  },
  {
    name : 'iOS',
    catalog : ''
  },
  {
    name : 'Android',
    catalog : ''
  },
  {
    name : 'ReactJs',
    catalog : ''
  },
  {
    name : 'NextJs',
    catalog : ''
  },
  {
    name : 'Javascript',
    catalog : ''
  },
  {
    name : 'NodeJs',
    catalog : ''
  },
  {
    name : 'Typescript',
    catalog : ''
  },
]