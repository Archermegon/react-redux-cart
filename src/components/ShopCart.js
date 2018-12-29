import React, { Component } from "react";
import styled from "styled-components";
import { total } from "../selectors";

class ShopCart extends Component {
  state = {
    chk: true
  };
  render() {
    const { chk } = this.state;
    const { cart, products, change, minus, checkout } = this.props;
    // console.log(products[0].proName);
    // console.log(cart.quantityByid[1]);
    console.log(minus);

    const shopCart =
      cart.productId && cart.productId.length && products.length ? (
        <ul className="cart">
          {cart.productId.map(ele => {
            const pro = products.find(e => e.id === ele);
            return (
              <li key={ele}>
                <input
                  type="checkbox"
                  name="chk"
                  checked={chk}
                  onChange={this.handleChange}
                />
                <p className="proName">{pro.proName}</p>
                <p className="proPrice">价格：{pro.price}</p>
                <button
                  disabled={cart.quantityByid[ele] <= 0}
                  onClick={() => {
                    minus(ele, pro.inventory + 1);
                  }}
                >
                  -
                </button>
                <p className="num">{cart.quantityByid[ele]}</p>
                <button
                  disabled={pro.inventory < 0}
                  onClick={() => {
                    change(ele);
                  }}
                >
                  +
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        "购物车中暂无商品"
      );
    return (
      <Cart>
        <h4>购物车：</h4>
        {shopCart}
        <p>
          总价：
          {console.log(cart.productId)}
          {total(cart, products)}
        </p>
        <button
          className="checkout"
          disabled={cart.productId ? !cart.productId.length : false}
          onClick={checkout}
        >
          结算
        </button>
      </Cart>
    );
  }
  handleChange = event => {
    this.setState({
      chk: event.target.checked
    });
  };
}

export default ShopCart;
const Cart = styled.div`
  .cart > li {
    display: flex;
    align-items: center;
    background: #ccc;
    margin-bottom: 5px;
  }
  button {
    width: 30px;
    height: 30px;
  }
  .checkout {
    width: 100px;
  }
  .proName {
    width: 150px;
  }
  .proPrice {
    width: 150px;
  }
  .num {
    width: 50px;
    text-align: center;
  }
`;
