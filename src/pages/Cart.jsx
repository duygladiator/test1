import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/cart.css";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import products from "./../assets/data/products";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title={"Cart"}>
      <CommonSection title={"CART"} />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">Nothing here</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Img</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lang="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">{totalAmount}</span>
                </h6>
              </div>
              <div>
                <button className="buy__btn">
                  <Link to="/shop">Continue shopping</Link>
                </button>
                <button className="buy__btn">
                  <Link to="/checkout">Check Out</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity} pcs</td>
      <td>
        <i class="ri-delete-bin-line" onClick={deleteProduct}></i>
      </td>
    </tr>
  );
};

export default Cart;
