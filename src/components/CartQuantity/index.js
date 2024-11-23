import React, { useEffect, useState } from "react";

const CartQuantity = ({ increase, decrease, setValue, quantitys }) => {
  // Initialize quantity state with the value passed in the props
  const [quantity, setQuantity] = useState(setValue);

  // Sync quantity with the prop value if it changes
  useEffect(() => {
    setQuantity(setValue);
  }, [setValue]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    if (increase) {
      increase(); // Notify parent if there's an increase function
    }
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    if (decrease) {
      decrease(); // Notify parent if there's a decrease function
    }
  };

  return (
    <>
      <div className="cart_quantity_box">
        <div>
          <span className="quantity_text">Quantity</span>
        </div>
        <div className="cart_quantity_actionBtns">
          <button onClick={handleDecrease} className="subtraction_btn">
            -
          </button>
          <span className="quantity_number">
            {/* {quantity.toString().padStart(2, "0")} */}
            {/* {setValue} */}
            {quantitys}
          </span>
          <button onClick={handleIncrease} className="addition_btn">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartQuantity;
