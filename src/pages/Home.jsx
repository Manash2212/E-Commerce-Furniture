import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Hero from "../components/Hero/Hero";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";

const Home = () => {
  const [data, setData] = useState(products);

  useEffect(() => {
    const filteredData = products.filter((item) => item.category === "chair");
    setData(filteredData);
    // console.log(filteredData);
  }, []);

  const year = new Date().getFullYear();
  return (
    <div className="">
      {/* For Hero Section */}
      <Hero year={year} />

      {/* For Services Card */}
      <Services />

      <div className="">
        <div className="container2  mx-auto font-primary">
          <div className="tending_products mx-auto ">
            <h1 className="text-center text-2xl tracking-wide font-bold">
              Trending Products
            </h1>
            <ProductList data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
