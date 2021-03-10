import React from 'react';
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";

function Checkout() {
    const [{basket}] =useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_ad"
                    src="https://marketing.dcassetcdn.com/blog/2016/February/website-banners-roundup/2_828.jpg"
                    alt=""
                />

                {basket?.length === 0 ? (
                    <div  className="checkout__lefttitle">
                        <h1>Your Shopping Basket Is Empty</h1>
                        <hr/>
                        <p>You have no item in your basket. To 
                            buy one or more items, Click add to 
                            basket next to the item </p>
                    </div>
                ):(
                    <div className="checkout__title">
                        <h1>Your Shopping Basket</h1>
                        <hr/>

                        {/* list all checkout products */}

                        {basket?.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            { basket?.length > 0 && (
                <div className="checkout__right">
                     <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
