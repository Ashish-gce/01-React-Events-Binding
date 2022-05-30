import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  //  increament operation
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <p className="text-danger display-4 font-weight-bold">Hello Ashish</p>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-secondary text-white">
                  <p className="h4">Class Based Counter App</p>
                </div>
                <div className="card-body">
                  <p className="h2">{this.state.counter}</p>
                  <button
                    className="btn btn-secondary btn-sm click"
                    onClick={this.increaseCounter}
                  >
                    Increament
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CounterClass;
