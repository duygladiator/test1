import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";
import products from "./../assets/data/products";
import ProductsList from "./../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "tee") {
      const filteredProducts = products.filter(
        (item) => item.category === "tee"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "sweater") {
      const filteredProducts = products.filter(
        (item) => item.category === "sweater"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "lSleeve") {
      const filteredProducts = products.filter(
        (item) => item.category === "lSleeve"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "polo") {
      const filteredProducts = products.filter(
        (item) => item.category === "polo"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProduct);
  };

  return (
    <Helmet title={"Shop"}>
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select name="" id="" onChange={handleFilter}>
                  <option value="">Filter by Category</option>
                  <option value="tee">Tee</option>
                  <option value="sweater">Sweater</option>
                  <option value="polo">Polo</option>
                  <option value=""></option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select name="" id="">
                  <option value="">Sort by</option>
                  <option value="tee">Ascending Price</option>
                  <option value="sweater">Descending Price</option>
                  <option value="polo">Trending</option>
                  <option value="">On Sale OFF</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search something..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>

        <section>
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1>None found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </section>
    </Helmet>
  );
};

export default Shop;
