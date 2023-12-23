import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await resp.json();
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  const handleBuyClick = () => {
    alert(`You have bought ${product.title}`);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.productDetail}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h2>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.category}>Category: {product.category}</p>
          <div className={styles.rating}>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </div>
          <button className={styles.buyButton} onClick={handleBuyClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
