import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroImg from "../assets/images/heroImg.jpg";

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [teeProducts, setTeeProducts] = useState([]);
  const [sweaterProducts, setSweaterProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProduct = products.filter(
      (item) => item.category === "tee"
    );

    const filteredBestSalesProduct = products.filter(
      (item) => item.category === "sweater"
    );

    const filteredTeeProduct = products.filter(
      (item) => item.category === "tee"
    );

    const filteredSweaterProduct = products.filter(
      (item) => item.category === "sweater"
    );

    setTrendingProducts(filteredTrendingProduct);
    setBestSalesProducts(filteredBestSalesProduct);
    setTeeProducts(filteredTeeProduct);
    setSweaterProducts(filteredSweaterProduct);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Now {year}</p>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, deserunt!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Now</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6" className="text-start">
              <img src={heroImg} alt="" />
            </Col>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4>SOOS LUOWJNG COS HAJN</h4>
                <h3>HOLOGRAM TEE</h3>
              </div>

              <Clock />

              <button className="buy__btn store__btn">
                <Link to="/shop">Visit Shop</Link>
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">NEW ARRIVALS</h2>
            </Col>
            <ProductsList data={teeProducts} />
            <ProductsList data={sweaterProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">POPULAR</h2>
            </Col>
            <ProductsList data={teeProducts} />
            <ProductsList data={sweaterProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
