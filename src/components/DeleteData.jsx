import React, { useEffect, useState } from "react";
import { getData, deleteData } from "../queries/auth";
import "./index.css";

export const DeleteData = () => {
  const [getDetails, setGetDetails] = useState("");

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

  const removeData = async () => {
    try {
      const res = await deleteData();
      setGetDetails("");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (!getDetails)
    return (
      <div className="container">
        <h1>Delete Request</h1>
        <div className="wrapper">
          <div key={getDetails.id} className="wrapper__card">
            <h3>This post has been deleted succesfully!</h3>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="container">
        <h1>Delete Request</h1>
        <div className="wrapper">
          <div className="wrapper__number">
            <p>{getDetails.id}</p>
          </div>

          <div key={getDetails.id} className="wrapper__card">
            <div>
              <h3>{getDetails.title}</h3>
              <p>{getDetails.body}</p>
            </div>

            <button onClick={removeData} type="submit">
              Delete Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
