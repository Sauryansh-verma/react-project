const CartProductCard = ({ product, onRemove }) => {
  return (
    <div className="flex w-full gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      
      {/* Product Image */}
      <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <p className="text-sm font-medium capitalize text-blue-600">
            {product.category}
          </p>

          <h2 className="mt-1 line-clamp-2 text-lg font-semibold text-gray-900">
            {product.title}
          </h2>

          <p className="mt-2 line-clamp-1 text-sm text-gray-500">
            {product.description}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 flex items-center justify-between">
          
          {/* Quantity */}
          <div className="flex items-center rounded-lg border border-gray-300">
            <button className="px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-100">
              −
            </button>

            <span className="px-4 py-1.5 font-medium">
              {product.quantity}
            </span>

            <button className="px-3 py-1.5 text-lg text-gray-600 hover:bg-gray-100">
              +
            </button>
          </div>

          {/* Price */}
          <p className="text-xl font-bold text-gray-900">
            ${(product.price * product.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove?.(product.id)}
        className="self-start text-sm font-medium text-red-500 transition hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartProductCard;