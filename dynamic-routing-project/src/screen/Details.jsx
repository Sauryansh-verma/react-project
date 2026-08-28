import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router'


const Details = () => {
  let {id} = useParams();

  let [product, setProduct] = useState();

  let getProduct = async () => {
    try{
      setProduct((await axios.get(`https://fakestoreapi.com/products/${id}`)).data);
    }catch(error){
      console.log(`error while getting data ${error}`);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);

return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl p-8 shadow-sm">

          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-50 rounded-xl p-10">
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full max-w-md h-[450px] object-contain mix-blend-multiply"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-3">
              {product?.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {product?.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-5">

              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-xl">★</span>

                <span className="font-semibold text-gray-800">
                  {product?.rating.rate}
                </span>
              </div>

              <span className="text-gray-500">
                ({product?.rating.count} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-7">
              <span className="text-4xl font-bold text-gray-900">
                ${product?.price}
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-7 text-lg">
              {product?.description}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 my-7"></div>

            {/* Quantity */}
            <div>
              <p className="font-semibold text-gray-800 mb-3">
                Quantity
              </p>

              <div className="flex items-center border border-gray-300 rounded-lg w-fit">

                <button
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  −
                </button>

                <span className="px-5 py-2 font-semibold">
                </span>

                <button
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  +
                </button>

              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-7">

              <button className="flex-1 bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition">
                🛒 Add to Cart
              </button>

              <button className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition">
                Buy Now
              </button>

            </div>

            {/* Wishlist */}
            <button className="mt-4 w-full border border-gray-300 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition">
              ♡ Add to Wishlist
            </button>

          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl mb-3">🚚</div>
            <h3 className="font-semibold text-lg">
              Free Shipping
            </h3>
            <p className="text-gray-500 mt-1">
              Free shipping on all orders.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl mb-3">↩️</div>
            <h3 className="font-semibold text-lg">
              30 Days Return
            </h3>
            <p className="text-gray-500 mt-1">
              Return or exchange within 30 days.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-2xl mb-3">🛡️</div>
            <h3 className="font-semibold text-lg">
              Secure Payment
            </h3>
            <p className="text-gray-500 mt-1">
              Your payment information is secure.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};


export default Details
