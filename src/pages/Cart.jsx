import CommonSection from "../components/UI/CommonSection";
// import ArmChair from "../assets/images/arm-chair-01.jpg";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <section className="min-w-full my-10">
      <div className="container min-w-full ">
        <CommonSection title={"Shopping Cart"} />
        <div className="content w-[90%] max-sm:w-full min-h-[50vh] mx-auto flex max-md:flex-col max-md:gap-4 max-md:items-center ">
          {cartItems.length === 0 ? (
            <h2 className="text-center mx-auto text-2xl font-secondary flex items-center justify-center">
              No Items in cart
            </h2>
          ) : (
            <div className="cart-items max-w-[70%]  flex items-start flex-col w-full ">
              {cartItems.map((item, index) => (
                <DataContainer item={item} key={index} />
              ))}
            </div>
          )}
          <div className="amount max-w-[28%] ml-2 mt-5  p-2 font-primary max-md:max-w-full max-md:my-5">
            <div className="subtotal flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-800 ">Subtotal</h3>
              <h3 className="text-xl font-bold">₹ {totalAmount}</h3>
            </div>
            <p className="text-gray-500 my-4">
              Taxes and shipping will calculate in checkout
            </p>
            <div className="cout_cshoppping flex flex-col gap-5 items-center mt-7 w-full">
              <motion.div className="w-full" whileTap={{ scale: 0.9 }}>
                <Link to={"/checkout"}>
                  <button className="bg-slate-800 px-2 py-1 w-full rounded-md text-xl  text-white">
                    Checkout
                  </button>
                </Link>
              </motion.div>
              <motion.div className="w-full" whileTap={{ scale: 1.1 }}>
                <Link to={"/shop"}>
                  <button className="bg-slate-800 px-2 py-1 w-full rounded-md text-xl  text-white">
                    Continue Shopping
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DataContainer = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(deleteItem(item.id));
  };
  return (
    <div
      key={item.id}
      className="items w-full  flex items-center border-b-2 border-gray-300 shadow-md  mt-5  font-primary"
    >
      <div className="items flex sm:items-center justify-around  w-full min-h-[90px] max-sm:flex-col max-sm:gap-4 max-sm:py-2">
        <div className="img-desc w-[35%] flex  justify-around max-sm:w-full">
          <div className="img w-full  ">
            <img
              src={item.imgUrl}
              alt="chair"
              className="w-full h-[70px] object-contain"
            />
          </div>
          <div className="title  w-[50%] max-sm:text-md font-medium text-black/90">
            <h2>{item.productName}</h2>
          </div>
        </div>
        <div className="pr-qt-dl w-[65%] flex max-sm:w-full  items-center justify-around">
          <div className="price  w-[20%] max-sm:w-[33%] flex justify-center ">
            <h3>₹ {item.price}</h3>
          </div>
          <div className="qty w-[15%] max-sm:w-[33%] flex justify-center  ">
            <p>{item.quantity}</p>
          </div>
          <motion.div
            className="dlt  w-[5%] cursor-pointer max-sm:w-[33%] flex justify-center "
            onClick={deleteProduct}
            whileTap={{ scale: 1.1 }}
          >
            <FaTrashAlt className="text-xl md:text-2xl text-gray-500 hover:text-red-500" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
