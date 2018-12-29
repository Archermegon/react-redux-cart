// 此文件是为了导出一些重复且简单的操作,计算衍生数据
export const total = (cart, products) => {
  return cart.productId.length && products.length
    ? cart.productId.reduce((num, e) => {
        console.log(num, products.find(ele => ele.id === e).price);
        return (
          num * 1 +
          products.find(ele => ele.id === e).price * cart.quantityByid[e]
        );
      }, 0)
    : "0";
};
