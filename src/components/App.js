import React, { Component } from "react";
import { Heading, SmallHeading } from "./style";

class App extends Component {
  render() {
    return (
      <Heading>
        <h1>Welcome</h1>
        <SmallHeading>
          {" "}
          This is small dsjfbjsdnfkjnsdklnfkljdsnfk jksdnfkjnsdjkfn kjs dnfkjns
          dkjnfkjs nkjfnsdjk fnsjkd nkjlsdfnf kjlsdnheading
        </SmallHeading>
      </Heading>
    );
  }
}

export default App;
