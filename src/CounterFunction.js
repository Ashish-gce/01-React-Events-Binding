import React, { useState } from "react";

let CounterFunction = () => {
  let [theCount, setTheCount] = useState(0);

  //   below code done in more easy way in one line
  //   let updateCounter = () => {
  //     setTheCount(theCount + 1);
  //   };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-info text-white">
                <p className="h2">Function Based Counter App</p>
              </div>
              <div className="card-body">
                <p className="display-4">{theCount}</p>
                {/* <button
                  className="btn btn-info btn-sm text-white"
                  onClick={updateCounter}
                > */}
                <button
                  className="btn btn-danger btn-sm text-white"
                  onClick={() => setTheCount(theCount + 1)}
                >
                  Increament
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterFunction;
