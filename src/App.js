import React, { useState } from 'react';
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
	const [cart, setCart] = useState([]);
	const [page, setPage] = useState(PAGE_PRODUCTS);

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
		console.log('adding to cart');
		setCart([...cart, product]);
	};

	const renderCart = () => (
		<>
			<h1>Cart</h1>
			<div className="products">
				{products.map((product, index) => (
					<div className="product" key={index}>
						<h3>{product.name}</h3>
						<h4>{product.cost}</h4>
						<img src={product.image} alt={product.name} />
						<button onClick={() => addToCart(product)}>Add to Cart</button>
					</div>
				))}
			</div>
		</>
  );

	const renderProducts = () => (
		<>
			<h1>Products</h1>
			<div className="products">
				{products.map((product, index) => (
					<div className="product" key={index}>
						<h3>{product.name}</h3>
						<h4>{product.cost}</h4>
						<img src={product.image} alt={product.name} />
						<button onClick={() => addToCart(product)}>Add to Cart</button>
					</div>
				))}
			</div>
		</>
  );

	return (
		<div className="App">
			<header>
				<button>Go to Cart ({cart.length})</button>
			</header>
			{page === PAGE_PRODUCTS && renderProducts()}
			{page === PAGE_CART && renderCart()}
		</div>
	);
}

export default App;
