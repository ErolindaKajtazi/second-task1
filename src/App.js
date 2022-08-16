import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    <Tabs className="tabs">
      <TabList className="tab-list">
        <Tab className="domain">Domains</Tab>
        <Tab>Web Hosting</Tab>
        <Tab>Deadicated Servers</Tab>
        <Tab>Virtual Cloud Servers</Tab>
        <Tab>WordPress Hosting</Tab>
        <Tab>Email Hosting</Tab>
        <Tab>VPS Hosting Servers</Tab>
        <Tab>Free Hosting</Tab>
      </TabList>

      <TabPanel>
        <Card />
      </TabPanel>

      <TabPanel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </TabPanel>
    </Tabs>
  );
}

export default App;
