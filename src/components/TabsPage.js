import React from "react";
import { Tabs } from "antd";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const TabPane = Tabs.TabPane;

class TabsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      changeTab: "1"
    };
  }

  callback(key) {
    console.log(key);
  }

  onChangeTab() {
    console.log("Hey");
  }

  render() {
    return (
      <div className="container tabs-wrapper">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane
            tab="Sign In"
            key={this.state.changeTab}
            aria-selected="false"
          >
            <LoginForm view={this.onChangeTab.bind(this)} />
          </TabPane>
          <TabPane
            tab="Sign Up"
            aria-selected="true"
            key={this.state.changeTab + 1}
          >
            <RegisterForm />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabsPage;
