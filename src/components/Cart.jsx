function Cart({ cart }) {
  return (
    <div className="cart">
      <h1>🛒 Корзина</h1>

      {cart.length === 0 ? (
        <p>Корзина пустая</p>
      ) : (
        cart.map((product, index) => (
        <div className="cart-item" key={index}>

            <div>
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;