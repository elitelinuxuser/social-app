import React from "react";
import { Tabs } from "antd";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const TabPane = Tabs.TabPane;

class TabsPage extends React.Component {
  callback(key) {
    console.log(key);
  }

  render() {
    return (
      <div className="container tabs-wrapper">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Sign In" key="1">
            <LoginForm />
          </TabPane>
          <TabPane tab="Sign Up" key="2">
            <RegisterForm />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabsPage;
