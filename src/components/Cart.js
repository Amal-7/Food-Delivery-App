import { useDispatch, useSelector } from "react-redux"
import CartItems from "./CartItems"
import { clearCart } from "../utils/Redux/cartSlice"


const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(clearCart())
    }
    return ( 
        <div className="cart">
            <h1 className="text-3xl p-2 ">Cart Items</h1>
            <button onClick={() => handleCart()} className="addItem">Clear Cart</button>
            {
                cartItems.map((item) =>  <CartItems key={item.id} {...item} /> )
            }
           


        </div >
    )
}

export default Cart