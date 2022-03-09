import React from "react";
import { DeleteData } from "../components/DeleteData";
import { GetData } from "../components/GetData";
import { PostData } from "../components/PostData";
import { UpdateData } from "../components/UpdateData";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>List of Posts</header>

      <GetData />

      <PostData />

      <UpdateData />

      <DeleteData />
    </div>
  );
};
export default Home;
