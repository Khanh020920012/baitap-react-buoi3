import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.card.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    {" "}
                    <strong> {item.price * item.amount}</strong>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.handleGiam(item.id);
                      }}
                      className="btn btn-warning"
                    >
                      -
                    </button>
                    {item.amount}
                    <button
                      onClick={() => {
                        this.props.handleTang(item.id);
                      }}
                      className=" btn btn-secondary"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <img src={item.image} alt="" width={100} />
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
