import {
  BookMarked,
  ImageUp,
  SquareSquare,
  Users,
} from "lucide-react";

export const urls_sidebar = [
  {
    name: "My Posts",
    path: "/profile/my-posts",
    icon: <ImageUp strokeWidth={1.7} size={20} />,
  },
  {
    name: "Friends",
    path: "/friends",
    icon: <Users strokeWidth={1.9} size={20}/>,
  },
  {
    name: "Explore",
    path: "/music",
    icon: <SquareSquare strokeWidth={1.7} size={20}/>,
  },
  {
    name: "Save",
    path: "/profile/my-save",
    icon: <BookMarked strokeWidth={1.7} size={20}/>,
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
