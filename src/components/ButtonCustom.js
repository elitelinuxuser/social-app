import React from "react";
import { Button } from "mdbreact";

export default class ButtonCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }
  mouseEnter = () => {
    this.setState({ isHovered: true });
  };
  mouseLeave = () => {
    this.setState({ isHovered: false });
  };
  render() {
    return (
      <Button
        {...this.props}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        outline={this.state.isHovered}
        className="mb-2"
      />
    );
  }
}
