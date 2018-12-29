import React, { Component } from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { getPro, addCart, change, minus, checkout } from "./../actions";
import ShopCart from "./ShopCart";
import "./cart.scss";

class Cart extends Component {
  componentDidMount() {
    const { getPro } = this.props;
    getPro();
    // getCart({
    //   productId: ["1"],
    //   quantityByid: { "1": 1 }
    // });
  }
  render() {
    // console.log(this.props);
    const { products, addCart, cart, change, minus, checkout } = this.props;
    // console.log(products);
    return (
      <div className="shopCart">
        <ProductList products={products} addCart={addCart} />
        <ShopCart
          cart={cart}
          products={products}
          change={change}
          minus={minus}
          checkout={checkout}
        />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  products: state.products,
  cart: state.cart
});

export default connect(
  mapStatetoProps,
  { getPro, addCart, change, minus, checkout }
)(Cart);
