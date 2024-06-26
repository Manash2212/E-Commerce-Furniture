import { IoMdAdd } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap  items-center py-5">
        <div className="item  shadow-md rounded-md py-2 px-2 cursor-pointer">
          <Link to={`/shop/${item.id}`}>
            <div className="item_img  w-[300px] h-[250px] pb-2 sm:w-[250px] md:w-[280px] lg:w-[300px] ">
              <motion.img
                src={item.imgUrl}
                alt="trending_product"
                className="w-full object-contain h-full"
                whileHover={{ scale: 0.9 }}
              />
            </div>
          </Link>
          <div className="img_details">
            <Link to={`/shop/${item.id}`}>
              <h2 className="text-xl font-semibold">{item.productName}</h2>
            </Link>
            <p className="text-gray-400">{item.cateory}</p>
            <div className="price_add flex items-center justify-between mt-2 px-1">
              <span> ₹{item.price}</span>
              <motion.span
                className="bg-black p-1 rounded-full text-white "
                whileTap={{ scale: 1.2 }}
              >
                <IoMdAdd />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
