import { Settings } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { HiTable } from "react-icons/hi";
import { LuListTodo } from "react-icons/lu";

const SideBarLinks = [
  {
    id: 1,
    title: "Profile",
    icon: CgProfile,
  },
  {
    id: 2,
    title: "Tasks",
    icon: LuListTodo
  },
  {
    id: 3,
    title: "Recent Activities",
    icon: HiTable,
  },
  {
    id: 4,
    title: "Setting",
    icon: Settings
  },
];

export default SideBarLinks;
