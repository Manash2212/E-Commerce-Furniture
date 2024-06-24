import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="flex items-center justify-around">
      {data.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
