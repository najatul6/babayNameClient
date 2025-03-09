export const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
    submenu: [
      { name: "Our Team", path: "/about/team" },
      { name: "Mission & Vision", path: "/about/mission" },
    ],
  },
  {
    name: "Services",
    path: "/services",
    submenu: [
      { name: "Car Repair", path: "/services/car-repair" },
      { name: "Oil Change", path: "/services/oil-change" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
  },
];