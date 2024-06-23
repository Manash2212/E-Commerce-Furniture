import Services from "../Services/Services";
import Hero from "../components/Hero/Hero";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="">
      {/* For Hero Section */}
      <Hero year={year} />

      {/* For Services Card */}
      <Services />

      <div
        className=" 
         border-2  border-red-500"
      >
        <div className="container2  mx-auto">
          <div className="tending_products">
            <h1>Trending Products</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
