import React from "react";
import UserLayout from "../../components/Layout/userlayout";
import CartProducts from "../../components/CartProducts";
import CustomBanner from "../../components/CustomBanner";

const Cart = () => {
  return (
    <UserLayout>
      <CustomBanner text="My Account" />
      <div className="myAccountPage">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec_head">
                <h2 className="sec_title">Username</h2>
              </div>
            </div>
            <div className="col-md-12">
              <ul
                class="nav nav-pills myAccountTabs"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="myAccountTabs-btn nav-link active"
                    data-toggle="pill"
                    data-target="#my-Account"
                    type="button"
                  >
                    My Account
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="myAccountTabs-btn nav-link"
                    data-toggle="pill"
                    data-target="#my-profile"
                    type="button"
                  >
                    Profile
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="myAccountTabs-btn nav-link"
                    data-toggle="pill"
                    data-target="#shopping-setails"
                    type="button"
                  >
                    Shopping Details
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="myAccountTabs-btn nav-link"
                    data-toggle="pill"
                    data-target="#my-wishlist"
                    type="button"
                  >
                    WishList
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="myAccountTabs-btn  nav-link"
                    data-toggle="pill"
                    data-target="#my-shoppingCart"
                    type="button"
                  >
                    Shopping Cart
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="my-Account">
                  My Account
                </div>
                <div class="tab-pane fade" id="my-profile">
                  Profile
                </div>
                <div class="tab-pane fade" id="shopping-setails">
                  Shopping Details
                </div>
                <div class="tab-pane fade" id="my-wishlist">
                  WishList
                </div>
                <div class="tab-pane fade" id="my-shoppingCart">
                  <CartProducts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Cart;
