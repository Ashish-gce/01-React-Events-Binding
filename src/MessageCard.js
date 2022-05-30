import React, { useState } from "react";

export const MessageCard = () => {
  // Apply useState() for state managament
  let [message, setMessage] = useState("");
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h2 className="display-4 text-info">Hello: {message}</h2>
                <button
                  className="btn btn-success btn-lg"
                  onClick={() => setMessage("Good Morning")}
                >
                  Good Morning
                </button>
                <button
                  className="btn btn-warning btn-lg"
                  onClick={() => setMessage("Good Afternoon")}
                >
                  Good Afternoon
                </button>
                <button
                  className="btn btn-danger btn-lg"
                  //   //  🚀 " () => " is an annonymous function.
                  onClick={() => setMessage("Good Evening")}
                >
                  Good Evening
                </button>
                <button
                  className="btn btn-dark btn-lg text-white"
                  onClick={() => setMessage("Good Night")}
                >
                  Good Night
                </button>
                <button
                  className="btn btn-blue btn-lg"
                  onClick={() => setMessage("Chalo ab sssooo jao...")}
                >
                  Sleeping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
