import React, { useEffect, useState } from "react";
import { getData } from "../queries/auth";
import "./index.css";

export const GetData = () => {
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

  return (
    <div className="container">
      <h1>Get Request</h1>
      <div className="wrapper">
        <div className="wrapper__number">
          <p>{getDetails.id}</p>
        </div>

        <div key={getDetails.id} className="wrapper__card">
          <div>
            <h3>{getDetails.title}</h3>
            <p>{getDetails.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
