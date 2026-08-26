import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ProductCard = ({ product, item }) => {

  let {setCartItems, incrementProduct, decrementProduct} = useContext(MyContext);
  const addToCart = () => {
    setCartItems((prev) => [...prev, {...product, quantity: 1}]);
    alert(`${product.category} added into cart`);
  }

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="flex h-72 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        
        {/* Category */}
        <p className="mb-2 text-sm font-medium capitalize text-blue-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 font-medium text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${item ? product.price * item.quantity : product.price}
          </span>
          {
            item ? (
            <div className="flex items-center rounded-lg border border-gray-300">
              <button onClick={() => decrementProduct(product.id)} className="px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-100">
                −
              </button>

              <span className="px-4 py-1.5 font-medium">
                {item.quantity}
              </span>

              <button onClick={() => incrementProduct(product.id)} className="px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>) : (<button onClick={addToCart} className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600 active:scale-95">
            Add to Cart
          </button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;