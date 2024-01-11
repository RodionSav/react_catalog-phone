import { useNavigate } from 'react-router-dom';
import './CartPage.scss';
import React, { useState } from 'react';
import { CartProduct } from './CartProduct';
import { useAppSelector } from '../../app/hooks';
import { Product } from '../../types/product';

export const CartPage = () => {
  const navigate = useNavigate();
  const cartProducts = useAppSelector((
    state: { cartProducts: { items: any } },
  ) => state.cartProducts.items);

  const totalCart = useAppSelector((state) => state.cartProducts.total);

  const productPrice = cartProducts.reduce(
    (total: number, item: { quantity: number, price: number }) => total
    + (item.quantity * item.price), 0,
  );

  const [hasError, setHasError] = useState(false);

  return (
    <div className="cart">
      <div>
        <button
          type="button"
          className="cart__link"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h1 className="cart__title">Cart</h1>

        <div className="cart-container">
          {cartProducts.length ? (
            cartProducts.map((product: Product & { quantity: number; }) => (
              <CartProduct key={product.id} product={product} />
            ))
          ) : (
            <h1>Your cart is empty</h1>
          )}
        </div>
      </div>
      <div className="cart__total-container">
        <h1 className="cart__total-price-amount">
          {`$${productPrice}`}
        </h1>
        <h2 className="cart__total-carts">
          {totalCart === 1
            ? `Total for ${totalCart} item`
            : `Total for ${totalCart} items`}
        </h2>
        <div className="cart__button-checkout-container">
          <button
            type="button"
            className="cart__button-checkout"
            onClick={() => setHasError(true)}
          >
            Checkout
          </button>
        </div>
        {hasError
          && (
            <div className="cart__error">
              <button
                type="button"
                aria-label="close"
                className="cart__close cart__error__close"
                onClick={() => setHasError(false)}
              />
              <h2 className="cart__error__title">
                We are sorry, but this feature is not implemented yet
              </h2>
            </div>
          )}
      </div>
    </div>
  );
};
