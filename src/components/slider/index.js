import React, { Component } from "react";

export default class Slider extends Component {
  componentDidMount() {
    this.filterImages();
  }

  filterImages = () => {
    console.log("mounted");
  };

  render() {
    return (
      <div>
        This is small dsjfbjsdnfkjnsdklnfkljdsnfk jksdnfkjnsdjkfn kjs dnfkjns
        dkjnfkjs nkjfnsdjk fnsjkd nkjlsdfnf kjlsdnheading
      </div>
    );
  }
}
