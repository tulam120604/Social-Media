import { BookMarked, Heart, Home, MessageCircleMore, Users } from "lucide-react";

export const urls_sidebar = [
  {
    name: "Home",
    path: "/",
    icon: <Home strokeWidth={1.9} size={20} />,
  },
  {
    name: "Friends",
    path: "/friends",
    icon: <Users strokeWidth={1.9} size={20} />,
  },
  {
    name: "Messages",
    path: "/profile/groups",
    icon: <MessageCircleMore strokeWidth={1.7} size={20} />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <Heart strokeWidth={1.7} size={20} />,
  },
  {
    name: "Save",
    path: "/profile/my-save",
    icon: <BookMarked strokeWidth={1.7} size={20} />,
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
