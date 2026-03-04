import {
  IconCalendarEvent,
  IconClipboardText,
  IconDots,
  IconHeadset,
  IconMusic,
  IconSmartHome,
  IconUsers,
  IconVideo,
  IconCut,
} from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
export const sideBarData = [
  {
    id: uuidv4(),
    menuTitle: "Home",
    path: "/",
    icon: <IconSmartHome />,
  },
  {
    id: uuidv4(),
    menuTitle: "Watch",
    path: "/watch",
    icon: <IconVideo />,
  },
  {
    id: uuidv4(),
    menuTitle: "Shows",
    path: "/podcasts",
    icon: <IconHeadset />,
  },
  {
    id: uuidv4(),
    menuTitle: "Music",
    path: "/music",
    icon: <IconMusic />,
  },
  {
    id: uuidv4(),
    menuTitle: "Clips",
    path: "/clips",
    icon: <IconCut />,
  },
  {
    id: uuidv4(),
    menuTitle: "Artists",
    path: "/artists",
    icon: <IconUsers />,
  },
  {
    id: uuidv4(),
    menuTitle: "Event",
    path: "/event",
    icon: <IconCalendarEvent />,
  },
  {
    id: uuidv4(),
    menuTitle: "Pages",
    icon: <IconClipboardText />,
    menuItems: [
      {
        id: uuidv4(),
        title: "About / FAQ",
        dropDownPath: "/faq",
      },
      {
        id: uuidv4(),
        title: "Contact",
        dropDownPath: "/contact",
      },
      {
        id: uuidv4(),
        title: "Memberships",
        dropDownPath: "/pricing",
      },
      {
        id: uuidv4(),
        title: "Privacy Policy",
        dropDownPath: "/privacy",
      },
    ],
  },
];

export const mainNavbarData = [
  {
    id: uuidv4(),
    menuTitle: "Trending",
    path: "/trending",
  },
  {
    id: uuidv4(),
    menuTitle: "Moods",
    path: "/moods",
  },
  {
    id: uuidv4(),
    menuTitle: "Genres",
    path: "/genres",
  },
  {
    id: uuidv4(),
    menuTitle: "Artists",
    path: "/artists",
  },
  {
    id: uuidv4(),
    menuTitle: "More",
    path: "#",
    icon: <IconDots />,
    menuItems: [
      {
        id: uuidv4(),
        title: "Sign In",
        dropDownPath: "/signin",
      },
      {
        id: uuidv4(),
        title: "Sign Up",
        dropDownPath: "/signup",
      },
      {
        id: uuidv4(),
        title: "FAQ",
        dropDownPath: "/faq",
      },
      {
        id: uuidv4(),
        title: "Contact",
        dropDownPath: "/contact",
      },
      {
        id: uuidv4(),
        title: "Memberships",
        dropDownPath: "/pricing",
      },
      {
        id: uuidv4(),
        title: "Privacy Policy",
        dropDownPath: "/privacy",
      },
    ],
  },
];
