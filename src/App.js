import React from "react";
import "./App.css";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import { MessageCard } from "./MessageCard";
import { ProductItem } from "./ProductItem";

// 🚀 Class Based Component 🚀
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
//           <div className="conatainer">
//             <a href="/" className="navbar-brans text-white">
//               React Hooks
//             </a>
//           </div>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

//  🚀🚀🚀🚀  Functional Component  🚀🚀🚀🚀  //

const App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brans text-white h3">
            React Hooks
          </a>
        </div>
      </nav>
      <CounterClass />
      <CounterFunction />
      <MessageCard />

      <ProductItem />

      <div style={{ marginBottom: 150 }}></div>
    </React.Fragment>
  );
};

export default App;
