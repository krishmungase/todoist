import { Settings } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import { HiTable } from "react-icons/hi";
import { LuListTodo } from "react-icons/lu";

const SideBarLinks = [
  {
    id: 1,
    title: "Enrolled Courses",
    icon: HiTable,
  },
  {
    id: 2,
    title: "Wishlist",
    icon: LuListTodo
  },
  {
    id: 3,
    title: "My Profile",
    icon: CgProfile,
  },
  {
    id: 4,
    title: "Setting",
    icon: Settings
  },
];

export default SideBarLinks;
