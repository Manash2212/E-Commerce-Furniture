import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Hero from "../components/Hero/Hero";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    setTrendingProducts(filteredTrendingProducts);
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setBestSalesProducts(filteredBestSalesProducts);
    // console.log(chairFilteredData);
  }, []);

  const year = new Date().getFullYear();
  return (
    <div className="">
      {/* For Hero Section */}
      <Hero year={year} />

      {/* For Services Card */}
      <Services />

      {/* For Trending Product */}
      <div className="">
        <div className="container2  mx-auto font-primary">
          <div className="tending_products mx-auto ">
            <h1 className="text-center text-2xl tracking-wide font-bold">
              Trending Products
            </h1>
            <ProductList data={trendingProducts} />
          </div>
        </div>
      </div>

      {/* For Best Sales Product */}
      <div className=" mt-10">
        <div className="container2  mx-auto font-primary">
          <div className="tending_products mx-auto ">
            <h1 className="text-center text-2xl tracking-wide font-bold">
              Trending Products
            </h1>
            <ProductList data={bestSalesProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
