import CommonSection from "../components/UI/CommonSection";
// import ArmChair from "../assets/images/arm-chair-01.jpg";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/slice/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <section className="min-w-full">
      <div className="container min-w-full ">
        <CommonSection title={"Shopping Cart"} />
        <div className="content w-[90%]   min-h-[50vh]  mx-auto flex ">
          {cartItems.length === 0 ? (
            <h2 className="text-center mx-auto text-2xl font-secondary flex items-center justify-center">
              No Items in cart
            </h2>
          ) : (
            <div className="cart-items max-w-[70%] border-2 border-black flex items-start flex-col w-full ">
              {cartItems.map((item, index) => (
                <DataContainer item={item} key={index} />
              ))}
            </div>
          )}
          <div className="amount max-w-[30%] border-2 border-black ">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              laborum atque inventore vitae laboriosam consequuntur quas dolores
              cum non facere.{" "}
            </p>
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
      className="items w-full  flex items-center shadow-lg my-2 "
    >
      <div className="items flex items-center justify-around w-full h-[90px]">
        <div className="img w-[10%] ">
          <img
            src={item.imgUrl}
            alt="chair"
            className="w-full h-[80%] object-contain"
          />
        </div>
        <div className="title  w-[30%]">
          <h2>{item.productName}</h2>
        </div>
        <div className="price  w-[20%]">
          <h3>₹ {item.price}</h3>
        </div>
        <div className="qty w-[15%] ">
          <p>{item.quantity}</p>
        </div>
        <div className="dlt  w-[3%] cursor-pointer" onClick={deleteProduct}>
          <FaTrashAlt className="text-xl text-gray-500 hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
