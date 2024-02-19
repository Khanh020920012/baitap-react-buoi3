import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    let { image, name } = this.props.shoe;
    return (
      <div className="col-5">
        <img src={image} alt="" className="w-75" />
        <h6>{name}</h6>
      </div>
    );
  }
}
