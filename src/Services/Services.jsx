import serviceData from "../assets/data/serviceData";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="w-[100%] overflow-x-hidden border-2 border-red-500">
      <div className="container max-w-[70%] mx-auto py-10 ">
        <div className="items flex items-center justify-around gap-5">
          {serviceData.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              >
                <motion.div
                  className="item1  flex items-center justify-center  py-5 px-5 "
                  style={{ background: `${item.bg}` }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className=" p-2 bg-black rounded-full">
                    <IconComponent className="text-white text-3xl" />
                  </span>
                  <div className="child flex flex-col items-start">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
