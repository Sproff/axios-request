import React, { useEffect, useState } from "react";
import { getData, postData } from "../queries/auth";
import "./index.css";

export const PostData = () => {
  const [getDetails, setGetDetails] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await getData();
        setGetDetails(res);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  const sendData = async () => {
    try {
      const res = await postData({
        id: "100",
        title: "Pipedream Sample Request",
        body: "This is a sample request from a react project application!",
      });
      setGetDetails(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Post Request</h1>
      <div className="wrapper">
        <div className="wrapper__number">
          <p>{getDetails.id}</p>
        </div>

        <div key={getDetails.id} className="wrapper__card">
          <div>
            <h3>{getDetails.title}</h3>
            <p>{getDetails.body}</p>
          </div>

          <button onClick={sendData} type="submit">
            Send Post
          </button>
        </div>
      </div>
    </div>
  );
};
