import { BiGrid, BiHome, BiUser } from "react-icons/bi"

const sideNavItems = [
  {
    text: "Home",
    href: "/",
    icon: <BiHome />,
  },
  {
    text: "Catálogo",
    href: "/catalog",
    icon: <BiGrid />,
  },
  {
    text: "Quem Somos",
    href: "/about",
    icon: <BiUser />,
  },
]

export default sideNavItems
