import axios from "axios";
import { useState, useEffect } from "react";

export default function App23() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:8080/product");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1>This is App23 component</h1>
      <h2>Fetching Products from Backend</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              padding: '20px',
              borderRadius: '10px',
              width: '150px',
              textAlign: 'center',
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button style={{ padding: '5px 10px' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}