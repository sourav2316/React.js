import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "../components/CreatePost";

import Header from "../components/Header";
import PostList from "../components/PostList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Side-bar";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
