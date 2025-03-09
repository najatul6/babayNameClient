import { Link, NavLink } from "react-router-dom";
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import brandImg from "../../../assets/auth.png";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, ChevronDown } from "lucide-react";
import { toast } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageLoad, setIsPageLoad] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // Mobile submenu state
  const { user, logOut } = useAuth();

  const menu = [
    { name: "Home", path: "/", type: "public" },
    {
      name: "About",
      path: "/about",
      type: "public",
      submenu: [
        { name: "Our Team", path: "/about/team" },
        { name: "Mission & Vision", path: "/about/mission" },
      ],
    },
  ];

  const handleLogOut = () => {
    toast.promise(logOut(), {
      pending: "Logging out...",
      success: "Logged out successfully",
      error: "Error logging out",
    });
  };

  return (
    <nav className="overflow-x-clip bg-muted">
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center relative">
        <Link to="/" className="logo">
          <div className="flex justify-center items-center w-[120px] h-[30px]">
            <img src={brandImg} alt="" className="w-full h-fit object-center" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-5 capitalize">
          {menu.map((item) =>
            item.submenu ? (
              <div className="relative group" key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-orange-500 text-orange-500 transition duration-200 flex items-center"
                      : "hover:border-b-2 hover:border-orange-500 transition duration-200 flex items-center"
                  }
                  to={item.path}
                >
                  {item.name}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </NavLink>
                {/* Dropdown Submenu */}
                <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                  {item.submenu.map((sub) => (
                    <li key={sub.path}>
                      <NavLink
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-orange-500 text-orange-500 transition duration-200"
                    : "hover:border-b-2 hover:border-orange-500 transition duration-200"
                }
                key={item.path}
                to={item.path}
              >
                {item.name}
              </NavLink>
            )
          )}
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-1">
          <div className="lg:hidden rounded-md border p-1">
            {!isMenuOpen ? (
              <RiMenuAddLine
                onClick={() => {
                  setIsMenuOpen(true);
                  setIsPageLoad(true);
                }}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <CgMenuMotion
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl cursor-pointer"
              />
            )}

            <ul
              className={`capitalize w-full py-5 flex flex-col lg:hidden gap-5 absolute z-50 bg-white/40 backdrop-blur-md min-h-screen top-20 left-0 ${
                isMenuOpen
                  ? "animate__fadeInLeft"
                  : isPageLoad
                  ? "animate__fadeOutRight flex"
                  : "hidden"
              }`}
            >
              {menu.map((item) =>
                item.submenu ? (
                  <div key={item.path}>
                    <button
                      className="flex justify-between w-full px-4 py-2 hover:bg-gray-100"
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition ${submenuOpen ? "rotate-180" : ""}`} />
                    </button>
                    <ul className={`pl-4 transition ${submenuOpen ? "block" : "hidden"}`}>
                      {item.submenu.map((sub) => (
                        <li key={sub.path}>
                          <NavLink
                            to={sub.path}
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-orange-500 text-orange-500 transition duration-200"
                        : "hover:border-b-2 hover:border-orange-500 transition duration-200"
                    }
                    key={item.path}
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
