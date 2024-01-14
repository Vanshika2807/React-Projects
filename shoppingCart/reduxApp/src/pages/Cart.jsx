import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  //useSelector is used to bring variables value out of slices 
  //here cart is an array in slice 

  useEffect ( () => {
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
    //here reduce function is used having accumulator and current value
    // acc has been initialised with 0
    //in dependency cart is passed as we want it to calculate totalAmount only when cart component rendered
  }, [cart])

  return(
    <div>
      {
        cart.length > 0 ? 
        (<div>

          <div>
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
          </div>

          <div>

            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>
                CheckOut Now
              </button>
            </div>

          </div>


        </div>) : 
        (<div className="flex flex-col justify-center items-center text-center mx-auto gap-3 text-[20px] mt-20">
          <h1>Cart is Empty</h1>
          <Link to="/">
            <button className="text-white bg-green-600  border-gray-700 rounded-full font-semibold text-[20px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  );
};

export default Cart;
