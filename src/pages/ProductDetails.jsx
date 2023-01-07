import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { imgUrl, productName, price, description, reviews, category } =
    product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      useName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="4">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="4">
              <div className="product__details">
                <h2>{productName}</h2>
                <div>
                  <h4 className="product__price">{price}</h4>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
              </div>

              <button className="buy__btn" onClick={addToCart}>
                Add to Cart
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}>
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}>
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>John Cena</h6>
                          <span>{item.rating} (rated)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="review__form">
                    <h3>How you feel?</h3>
                    <form action="" onSubmit={submitHandler}>
                      <div className="form__group">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Your Name"
                          ref={reviewUser}
                        />
                      </div>

                      <div className="form__group d-flex align-items-center gap-3 rating__group">
                        <span onClick={() => setRating(1)}>
                          1<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setRating(2)}>
                          2<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setRating(3)}>
                          3<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setRating(4)}>
                          4<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setRating(5)}>
                          5<i class="ri-star-s-fill"></i>
                        </span>
                      </div>

                      <div className="form__group">
                        <textarea
                          rows={4}
                          type="text"
                          name=""
                          id=""
                          placeholder="Leave a review"
                          ref={reviewMsg}
                        />
                      </div>

                      <button type="submit" className="buy__btn">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* <div className="tab__content">
                <p>{description}</p>
              </div> */}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related__title">You may also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
