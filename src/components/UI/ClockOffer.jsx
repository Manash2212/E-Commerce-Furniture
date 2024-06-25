import { Link } from "react-router-dom";
import counterImage from "../../assets/images/counter-timer-img.png";
import { motion } from "framer-motion";
import Clock from "./Clock";

const ClockOffer = () => {
  return (
    <div className=" mt-10 w-full bg-slate-900">
      <div className="container3 max-w-[90%]    mx-auto font-primary flex items-center justify-between ">
        <div className="left flex items-start justify-start  h-full">
          <div className="item flex flex-col items-start text-white">
            <h3 className="text-2xl font-secondary">Limited Offers</h3>
            <h3 className="text-md">Quality Armchair</h3>
            {/* Clock Timer Section */}
            <div className="my-4  ">
              <Clock />
            </div>
            <motion.button
              className="px-2 py-1 mt-5 bg-white text-black text-[18px] font-semibold rounded-md"
              whileTap={{ scale: 1.1 }}
            >
              <Link to={"/shop"}>Visit Store</Link>
            </motion.button>
          </div>
        </div>
        <div className="right w-[300px] h-[250px]">
          <img src={counterImage} alt="offer_img" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ClockOffer;
