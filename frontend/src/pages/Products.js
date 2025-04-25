import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <div style={styles.productsContainer}>
        {products.map(product => (
          <div key={product._id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3>{product.name}</h3>
            <p>{product.color} - {product.material}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '15px',
    width: '200px',
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 'auto',
  }
};

export default Products;
