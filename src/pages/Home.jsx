import Helmet from "../components/Helmet/Helmet";
import hero_img from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="w-screen bg-blue-100 font-primary">
        <div className="container max-w-[90%] mx-auto flex py-5 items-center justify-between">
          <div className="left flex flex-col flex-1 items-start  gap-2">
            <p className="text-gray-600">Trending Product in {year}</p>
            <h2 className="text-2xl tracking-wider font-bold font-secondary">
              Meke Your Interior More <br />
              Minimalistic & Elegent. Just like wow..!
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              maxime nulla quaerat aspernatur dolore hic, mollitia optio
              repellat placeat eligendi distinctio.
            </p>
            <motion.button
              className="py-1 px-2 bg-black text-white uppercase rounded-md"
              whileTap={{ scale: 1.1 }}
            >
              <Link to={"shop"}>Shop now</Link>
            </motion.button>
          </div>
          <div className="right flex flex-col flex-1">
            <div className="banner">
              <img src={hero_img} alt="product" className="" />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
