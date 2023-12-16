import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { api } from "../api";

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api}/product`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {products.map((product) => (
                <div key={product._id} className=" border shadow-xl px-10 m-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-l font-bold text-gray-700">
                            {product.name}
                        </h2>
                        <div className="mt-2 text-gray-600">
                            <p className="text-lg font-bold">₹{product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="mt-2 bg-blue-400 text-white py-2 px-4 flex items-center justify-center">
                                <FaShoppingCart className="mr-2" />
                                <p>Add to Cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductCard;
