import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Importing images
import Logo from "../../assets/images/eco-logo.png";
import User_Icon from "../../assets/images/user-icon.png";

// Icons
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";

//

const logo_name = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { ease: "easeIn", duration: 0.5 } },
};
const logo_name2 = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { ease: "easeIn", duration: 0.9 } },
};
const logo_img = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { ease: "easeIn", duration: 0.8 } },
};
const mid_Sec = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Header = () => {
  const list_links = [
    { path: "/home", display: "Home" },
    { path: "/shop", display: "Shop" },
    { path: "/cart", display: "Cart" },
  ];
  return (
    <header className=" w-screen font-primary shadow-md py-2 ">
      <div className="container max-w-[90%] mx-auto  flex items-center justify-between ">
        <div className="left flex items-end justify-around ">
          <motion.img
            variants={logo_img}
            initial="hidden"
            animate="visible"
            src={Logo}
            alt="Company-logo"
            className="h-12"
          />
          <div className="heading flex flex-col ">
            <motion.h1
              variants={logo_name}
              initial="hidden"
              animate="visible"
              className="font-bold text-xl tracking-wide leading-4"
            >
              Multimart
            </motion.h1>
            <motion.span
              variants={logo_name2}
              initial="hidden"
              animate="visible"
              className="text-xs font-light"
            >
              Since 1999
            </motion.span>
          </div>
        </div>
        <div className="mid ">
          <ul className="flex gap-6  items-center justify-between">
            {list_links.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, translateY: -100 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                whileFocus={{ scale: 1.1 }}
                className="text-xl active:font-bold focus:font-bold hover:text-blue-900"
              >
                <Link to={item.path}>{item.display}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="right flex items-center gap-4">
          <motion.div
            className="favicon"
            variants={mid_Sec}
            initial="hidden"
            animate="visible"
          >
            <CiHeart className="text-xl cursor-pointer" />
          </motion.div>
          <motion.div
            className="favicon relative"
            variants={mid_Sec}
            initial="hidden"
            animate="visible"
          >
            <MdOutlineShoppingCart className="text-xl cursor-pointer" />
            <div className="count text-xs font-semibold w-[13px] h-[13px] absolute -top-1 -right-1 bg-red-500 text-white rounded-full flex items-center justify-center">
              2
            </div>
          </motion.div>
          <motion.img
            whileTap={{ scale: 1.2 }}
            variants={mid_Sec}
            initial="hidden"
            animate="visible"
            src={User_Icon}
            alt="users Icon"
            className="w-[30px] cursor-pointer"
          />
        </div>
        <div className="right-mobile hidden">
          <IoReorderThree />
        </div>
      </div>
    </header>
  );
};

export default Header;
