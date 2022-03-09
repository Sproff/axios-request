import React, { useEffect, useState } from "react";
import { getData, updateData } from "../queries/auth";
import "./index.css";

export const UpdateData = () => {
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

  const changeData = async () => {
    try {
      const res = await updateData({
        id: "100",
        title: "Updated Pipedream Sample Request",
        body: "This is an UPDATED sample request from a react project application!",
      });
      setGetDetails(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Patch Request</h1>
      <div className="wrapper">
        <div className="wrapper__number">
          <p>{getDetails.id}</p>
        </div>

        <div key={getDetails.id} className="wrapper__card">
          <div>
            <h3>{getDetails.title}</h3>
            <p>{getDetails.body}</p>
          </div>

          <button onClick={changeData} type="submit">
            Update Post
          </button>
        </div>
      </div>
    </div>
  );
};
