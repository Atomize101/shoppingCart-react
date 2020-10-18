import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <div>
        <h3>AA Battery</h3>
        <h4>2.99</h4>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQssvRf0kYLmdHTByPxbsbRK0QmGXFhCqRtuUZErTa2nozTRNwU-gycXAfcnoT_JC_DF6yL_Zni&usqp=CAc" />
        <button>Add to Cart</button>
      </div>

      <div>
        <h3>Blanket</h3>
        <h4>19.99</h4>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBv_F6IkhsSSifdmupiY05jRRrVHYbutAXe368YQ8FKHJc_8mPJ7dplFJ3LKR_LEI3vRZA2Qo&usqp=CAc" />
        <button>Add to Cart</button>
      </div>

    </div>
  );
}

export default App;
