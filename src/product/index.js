import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        "https://e564063f-f546-4560-8d40-4cf698601836.mock.pstmn.io/products/${+id}"
      )
      .then(function (result) {
        setProduct(result.data);
        // console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  console.log(product);
  return <h1>product page {id} 상품</h1>;
}
export default ProductPage;
