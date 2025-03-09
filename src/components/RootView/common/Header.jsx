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
import { menu } from "@/lib/menu";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isPageLoad, setIsPageLoad] = useState(false);
  const { user, logOut } = useAuth();

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLogOut = () => {
    toast.promise(logOut(), {
      pending: "Logging out...",
      success: "Logged out successfully",
      error: "Error logging out",
    });
  };

  return (
    <nav className="bg-muted">
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center relative">
        <Link to="/" className="logo">
          <div className="flex justify-center items-center w-[120px] h-[30px]">
            <img
              src={brandImg}
              alt="Logo"
              className="w-full h-fit object-center"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-5 capitalize">
          {menu.map((item, index) =>
            item.submenu ? (
              <div key={index} className="relative group">
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition duration-200 ${
                      isActive
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "hover:text-orange-500"
                    }`
                  }
                  to={item.path}
                >
                  {item.name} <ChevronDown className="w-4 h-4" />
                </NavLink>
                <ul className="absolute left-0 top-full mt-1 w-48 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                  {item.submenu.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={sub.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 transition duration-200 ${
                            isActive ? "bg-orange-500 text-white" : "hover:bg-gray-100"
                          }`
                        }                        
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className="hover:text-orange-500 transition duration-200"
              >
                {item.name}
              </NavLink>
            )
          )}
        </ul>

        {/* Authentication & Profile */}
        <div className="hidden lg:flex items-center gap-5">
          {user?.email ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-[3px] p-[1px] border-orange-600 bg-gray-200 overflow-hidden">
                    <img
                      src={
                        user?.photoURL ||
                        "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                      }
                      alt="Profile Picture"
                    />
                  </div>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link to="/my-profile">
                    <DropdownMenuItem className="cursor-pointer">
                      Profile{" "}
                      <DropdownMenuShortcut>
                        <User />
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogOut}
                  className="cursor-pointer"
                >
                  Log out{" "}
                  <DropdownMenuShortcut>
                    <LogOut />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink
              to="/auth/login"
              className="hover:text-orange-500 transition duration-200"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-1">
          <div className="border p-1">
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
              className={`absolute left-0 top-16 bg-white shadow-md w-full p-5 transition-all duration-300 ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              {menu.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="w-full text-left flex justify-between px-4 py-2 hover:bg-gray-100"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            submenuOpen[index] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <ul
                        className={`pl-4 transition ${
                          submenuOpen[index] ? "block" : "hidden"
                        }`}
                      >
                        {item.submenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={sub.path}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {sub.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile Login */}
              {!user?.email && (
                <NavLink
                  to="/auth/login"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Login
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
