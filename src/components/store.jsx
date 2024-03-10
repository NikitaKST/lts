import React from "react";
import CardView from "./cardView";
import IconSwitch from "./iconSwitch";
import ListView from "./lstView";
import products from "./products";

export default class Store extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      menuIcon: "view_module",
      storeView: "list",
    };
    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch(ev) {
    let icon = ev.target.textContent;
    let view;

    icon === "view_list" ? (icon = "view_module") : (icon = "view_list");
    icon === "view_list" ? (view = "module") : (view = "list");

    this.setState({ menuIcon: icon, storeView: view });
  }

  render() {
    return (
      <div className={"store-container"}>
        <IconSwitch
          icon={this.state.menuIcon}
          onSwitch={this.onSwitch}
        />
        {this.state.storeView === "list" ? (
          <ListView products={products}/>
        ) : (
          <CardView products={products}/>
        )}
      </div>
    );
  }
}