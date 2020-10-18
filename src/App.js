import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
	const [products] = useState([
		{
			name: 'AA Battery',
			cost: '$2.99',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQssvRf0kYLmdHTByPxbsbRK0QmGXFhCqRtuUZErTa2nozTRNwU-gycXAfcnoT_JC_DF6yL_Zni&usqp=CAc',
		},
		{
			name: 'Blanket',
			cost: '$19.99',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBv_F6IkhsSSifdmupiY05jRRrVHYbutAXe368YQ8FKHJc_8mPJ7dplFJ3LKR_LEI3vRZA2Qo&usqp=CAc',
		},
  ]);
  
  const addToCart = (product) => {
    console.log('adding to cart')
    setCart([...cart, product]);
  }

	return (
		<div className="App">
      <header>
        <button>Go to Cart ({cart.length})</button>
      </header>
			<h1>Products</h1>
      <div className="products">
			{products.map((product, index) => (
				<div className="product" key={index} >
					<h3>{product.name}</h3>
					<h4>{product.cost}</h4>
					<img src={product.image} alt={product.name} />
					<button onClick={() => addToCart(product)}>Add to Cart</button>
				</div>
			))}
      </div>
		</div>
	);
}

export default App;
