import { Settings } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { HiTable } from "react-icons/hi";
import { LuListTodo } from "react-icons/lu";

const SideBarLinks = [
  {
    id: 1,
    title: "Profile",
    path: "/profile",
    icon: CgProfile,
  },
  {
    id: 2,
    title: "Tasks",
    path: "/tasks",
    icon: LuListTodo
  },
  {
    id: 3,
    title: "Recent Activities",
    path: "/recent",
    icon: HiTable,
  },
  {
    id: 4,
    title: "Setting",
    path: "/setting",
    icon: Settings
  },
];

export default SideBarLinks;
