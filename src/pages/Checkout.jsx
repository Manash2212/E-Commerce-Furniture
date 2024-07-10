import { useSelector } from "react-redux";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";

const Checkout = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <section className="min-w-full">
      <div className="container min-w-full font-primary">
        <CommonSection title="Checkout" />
        <div className="billing_details w-[80%] mx-auto flex mt-7 max-sm:flex-col gap-5">
          <div className="adrs_form max-w-[70%] w-full py-4 px-3 max-sm:max-w-full shadow-md rounded-md">
            <h3 className="text-xl font-bold font-primary underline max-sm:text-lg">
              Enter a new delivery address
            </h3>
            <form action="">
              <div className="name flex flex-col mt-2">
                <label className=" mb-1 text-sm font-medium">
                  Full name (First and Last name)
                </label>
                <input
                  type="text"
                  className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="number flex flex-col mt-2">
                <label className=" mb-1 text-sm font-medium">
                  Mobile number
                </label>
                <input
                  type="number"
                  className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none"
                />
              </div>
              <div className="address flex flex-col mt-2">
                <label className=" mb-1 text-sm font-medium">
                  Flat, House no., Building, Company, Apartment
                </label>
                <input
                  type="text"
                  className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none"
                />
              </div>
              <div className="area flex flex-col mt-2">
                <label className=" mb-1 text-sm font-medium">
                  Area, Street, Sector, Village
                </label>
                <input
                  type="text"
                  className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none"
                />
              </div>
              <div className="land flex flex-col mt-2">
                <label className=" mb-1 text-sm font-medium">Landmark</label>
                <input
                  type="text"
                  className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none"
                  placeholder="E.g. near xyz hospital"
                />
              </div>
              <div className="pincode-city flex sm:items-center justify-between gap-2 mt-4 max-sm:flex-col">
                <div className="pin-city flex gap-2 max-lg:flex-col">
                  <div className="pin">
                    <label className=" pr-2 text-sm font-medium">Pincode</label>
                    <input
                      type="text"
                      className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none"
                      placeholder="6-digit Pincode"
                    />
                  </div>
                  <div className="city">
                    <label className=" pr-2 text-sm font-medium">
                      Town/City
                    </label>
                    <input
                      type="text"
                      className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none"
                    />
                  </div>
                </div>
                <div className="state">
                  <label className=" pr-2 text-sm font-medium">State</label>
                  <input
                    type="text"
                    className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none"
                    placeholder="E.g. near xyz hospital"
                  />
                </div>
              </div>
              <div className="radio">
                <motion.input
                  type="checkbox"
                  className="border-2 border-gray-500 rounded-md px-2 py-1 outline-none mt-4 mr-2 "
                  whileTap={{ scale: 1.1 }}
                />
                <motion.span className="text-sm  text-gray-800 tracking-wide">
                  Make this my default address
                </motion.span>
              </div>
              <div className="submitted">
                <motion.button
                  type="button"
                  className=" bg-slate-800 text-white font-primary mt-4 px-4 py-1 rounded-md"
                  whileTap={{ scale: 1.1 }}
                >
                  Use this is delivery address
                </motion.button>
              </div>
            </form>
          </div>
          <div className="bl_info max-w-[30%]  w-full max-sm:max-w-full  text-white">
            <div className="info px-5 py-5 bg-slate-800 flex flex-col gap-5 rounded-md">
              <div className="1 flex items-center justify-between">
                <h2>Total Qty:</h2>
                <h4>{totalQuantity} items</h4>
              </div>
              <div className="1 flex items-center justify-between">
                <h2>Subtotal:</h2>
                <h4>₹ {totalAmount}</h4>
              </div>
              <div className="1 flex justify-between max-md:gap-5 ">
                <h2>Shipping:</h2>
                <h2 className="font-light max-md:text-sm">free shipping</h2>
              </div>
              <div className="ship flex items-center justify-between">
                <h2>Handling fee</h2>
                <h4>₹ 9</h4>
              </div>
              <div className=" flex items-center justify-between border-t-2 border-gray-500 text-xl pt-3">
                <h2>Total Cost:</h2>
                <h4>₹ {totalAmount + 9}</h4>
              </div>
              <div className="order w-full">
                <motion.button
                  className="bg-white text-black w-full px-2 py-1 rounded-md text-lg font-medium"
                  whileTap={{ scale: 0.9 }}
                >
                  Place order
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
