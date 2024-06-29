import Common_img from "../../assets/images/common-bg.jpg";

const CommonSection = ({ title }) => {
  return (
    <section className="min-w-full box-border mt-[70px]">
      <div className="container min-w-full bg-gradient-to-r from-green-500/60 to-black/60">
        <div className="item h-[15vw] relative">
          <img
            src={Common_img}
            alt="common-bg"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="headings absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-primary text-3xl font-bold">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
