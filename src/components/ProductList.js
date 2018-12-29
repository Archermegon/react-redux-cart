import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

class ProductList extends Component {
  render() {
    const { products, addCart } = this.props;
    // console.log(products);
    const ul = products ? (
      <ul className="proList">
        {products.map(ele => (
          <li key={ele.id}>
            <p>商品名称：{ele.proName}</p>
            <p>商品价格:{ele.price}</p>
            <p>剩余库存:{ele.inventory}</p>
            <button
              disabled={!ele.inventory}
              onClick={() => {
                addCart(ele.id, ele.inventory - 1);
              }}
            >
              加入购物车
            </button>
          </li>
        ))}
      </ul>
    ) : (
      "加载中……"
    );
    return <Products>{ul}</Products>;
  }
}

export default ProductList;
const Products = styled.div`
  .proList {
    display: flex;
    li {
      margin-left: 45px;
    }
  }
`;
