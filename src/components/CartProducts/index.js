import React, { useEffect } from "react";
import { useState } from "react";
import CartQuantity from "../CartQuantity";
import { LikeImg01, trash } from "../../asserts/images";
import { imgUrl } from "../../utils/convertToFormData";
import CustomModal from "../../components/CustomModal";
import { Link } from "react-router-dom";

const CartProducts = () => {
  const [showModal, setshowModal] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItem"))
  );
  console.log("Cart Items", cartItems);

  // Update local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  // Handler to update item quantity
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    updatedCartItems[index].updatedPrice =
      updatedCartItems[index].price * newQuantity;

    setCartItems(updatedCartItems);
  };

  // Handler to delete an item
  const handleDelete = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="checkout_div text-right">
              {/* <button
                type="button"
                className="checkout_btn"
                onClick={() => setshowModal(true)}
              >
                Checkout
              </button> */}
              {cartItems?.length > 0 ? (
                <>
                  <Link to="/checkout" className="checkout_btn">
                    Checkout
                  </Link>
                </>
              ) : (
                <>

                </>)}
            </div>
          </div>
        </div>
      </div>
      {cartItems?.length > 0 ? (
        <div className="all_cart_items">
          {cartItems?.map((item, index) => (
            <div className="single_cart_product">
              <div className="cart_left_part">
                <div className="cart_product_Img">
                  <img src={`${imgUrl}/${item.image}`} alt="car_img"></img>
                </div>
                <div className="cart_product_details">
                  <h4 className="cart_product_title">{item.name}</h4>
                  <p className="welcome_para cart_product_para">
                    {item.long_desc}
                  </p>
                  <CartQuantity
                    quantitys={item.quantity}
                    setValue={item.quantity}
                    increase={() =>
                      handleQuantityChange(index, parseInt(item.quantity) + 1)
                    }
                    decrease={() => {
                      handleQuantityChange(
                        index,

                        parseInt(item.quantity) > 1 ? item.quantity - 1 : 1
                      );
                    }}
                  />
                  <div className="cart_product_price_main">
                    <div>
                      <span className="cart_product_price text-uppercase">
                        price:
                      </span>
                      <span className="cart_product_price pl-1">
                        ${item.updatedPrice || item.price}
                      </span>
                    </div>
                    <div>
                      <button className="request_quote_actionBtn">
                        request a free quote over the phone
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_right_part">
                <button
                  className="cart_item_delete_btn"
                  onClick={() => handleDelete(index)}
                >
                  <img src={trash} alt="trash"></img>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No Items In Cart</p>
      )}
      {/* <div className="all_cart_items">
        <div className="single_cart_product">
          <div className="cart_left_part">
            <div className="cart_product_Img">
              <img src={LikeImg01} alt="car_img"></img>
            </div>
            <div className="cart_product_details">
              <h4 className="cart_product_title">Cellular shades</h4>
              <p className="welcome_para cart_product_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
              <CartQuantity />
              <div className="cart_product_price_main">
                <div>
                  <span className="cart_product_price text-uppercase">
                    price:
                  </span>
                  <span className="cart_product_price pl-1">$0</span>
                </div>
                <div>
                  <button className="request_quote_actionBtn">
                    request a free quote over the phone
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart_right_part">
            <button className="cart_item_delete_btn">
              <img src={trash} alt="trash"></img>
            </button>
          </div>
        </div>
        <div className="single_cart_product">
          <div className="cart_left_part">
            <div className="cart_product_Img">
              <img src={LikeImg01} alt="car_img"></img>
            </div>
            <div className="cart_product_details">
              <h4 className="cart_product_title">Cellular shades</h4>
              <p className="welcome_para cart_product_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
              <CartQuantity />
              <div className="cart_product_price_main">
                <div>
                  <span className="cart_product_price text-uppercase">
                    price:
                  </span>
                  <span className="cart_product_price pl-1">$0</span>
                </div>
                <div>
                  <button className="request_quote_actionBtn">
                    request a free quote over the phone
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart_right_part">
            <button className="cart_item_delete_btn">
              <img src={trash} alt="trash"></img>
            </button>
          </div>
        </div>
        <div className="single_cart_product">
          <div className="cart_left_part">
            <div className="cart_product_Img">
              <img src={LikeImg01} alt="car_img"></img>
            </div>
            <div className="cart_product_details">
              <h4 className="cart_product_title">Cellular shades</h4>
              <p className="welcome_para cart_product_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
              <CartQuantity />
              <div className="cart_product_price_main">
                <div>
                  <span className="cart_product_price text-uppercase">
                    price:
                  </span>
                  <span className="cart_product_price pl-1">$0</span>
                </div>
                <div>
                  <button className="request_quote_actionBtn">
                    request a free quote over the phone
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart_right_part">
            <button className="cart_item_delete_btn">
              <img src={trash} alt="trash"></img>
            </button>
          </div>
        </div>
      </div> */}
      <CustomModal
        show={showModal}
        close={() => setshowModal(false)}
      // success={true}
      // heading={"product added to cart"}
      >
        <h1>Form</h1>
      </CustomModal>
    </>
  );
};

export default CartProducts;
