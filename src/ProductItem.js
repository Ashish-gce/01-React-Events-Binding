import React, { useState } from "react";

export let ProductItem = () => {
  let [product, setProduct] = useState({
    id: "AA101AC",
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Flying-Spur/7776/1587104359393/front-left-side-47.jpg?tr=h-48",
    name: "Valvo Luxary Car",
    qty: 2,
    price: 2015999,
  });

  //  Increase Quantity
  let increaseQty = () => {
    setProduct({
      ...product,
      qty: product.qty + 1,
    });
  };

  //  Decrease Quantity
  let decreaseQty = () => {
    setProduct({
      ...product,
      // // // // //  🥇 🥇 🥇 Important Logic 🥇 🥇 🥇 // // // // //
      qty: product.qty - 1 > 0 ? product.qty - 1 : 0,
    });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <p className="h3 text-secondary"> Product Cart</p>
            <p className="lead">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-hover table-lightgreen table-striped">
              <thead className="bg-dark text-white">
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.id}</td>
                  <td>
                    <img src={product.image} alt="" width="100" height="50" />
                  </td>
                  <td>{product.name}</td>
                  <td>
                    <i
                      className="fa fa-minus-circle mx-1"
                      onClick={decreaseQty}
                    />
                    {product.qty}
                    <i
                      className="fa fa-plus-circle mx-1"
                      onClick={increaseQty}
                    />
                  </td>
                  <td>&#8377; {product.price.toFixed(2)}</td>
                  <td>&#8377; {(product.price * product.qty).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
