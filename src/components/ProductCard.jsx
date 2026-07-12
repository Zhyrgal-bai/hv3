function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h2>{product.title}</h2>

      <h3>{product.price}$</h3>

      <button onClick={() => addToCart(product)}>
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductCard;