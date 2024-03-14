import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";

import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Side-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "./store/post-list-store";

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
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
