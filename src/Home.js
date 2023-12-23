import React, { useEffect, useState } from "react";
import Head from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./styles/Home.module.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const productsData = await resp.json();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Products List</title>
      </Head>
      <h2 className={styles.h2}>Products List</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3 className={styles.h3}>{product.title}</h3>
            <div className={styles.category}>Category: {product.category}</div>
            <p className={styles.price}>${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button className={styles.button}>Go to details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
