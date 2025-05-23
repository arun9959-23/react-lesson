export default function Product({ value }) {
  return (
    <div className="product-card">
      <h2>{value.name}</h2>
      <p>ID: {value.id}</p>
      <p>Price: ${value.price}</p>
    </div>
  );
}