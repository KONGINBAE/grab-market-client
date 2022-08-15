import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://e564063f-f546-4560-8d40-4cf698601836.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("error발생");
      });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매대는333 상품</h1>
        <div id="product-list"></div>

        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link classNmae="product-link" to={`/products/ ${index}`}>
                <div>
                  <img className="product-img" src={product.imageUrl}></img>
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                  <div className="product-seller">
                    <img
                      className="product-avater"
                      src="images/icons/avatar.png"
                    ></img>
                    <span>{product.seller} </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPage;
