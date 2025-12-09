const ProductSkeleton = () => {
  return (
    <div className="w-full md:w-[32%] mb-8 relative">
      <div className="w-full bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-lg animate-pulse">
        {/* Image Placeholder */}
        <div className="relative aspect-[4/3] bg-gray-200"></div>

        {/* Content Placeholder */}
        <div className="p-6 flex flex-col items-center">
          {/* Badge Placeholder */}
          <div className="w-24 h-6 bg-gray-200 rounded-full mb-4"></div>

          {/* Package Placeholder */}
          <div className="w-1/3 h-3 bg-gray-200 rounded mb-2"></div>

          {/* Title Placeholder */}
          <div className="w-3/4 h-6 bg-gray-200 rounded mb-3"></div>

          {/* Description Placeholder */}
          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
          <div className="w-2/3 h-3 bg-gray-200 rounded mb-5"></div>

          {/* Price Placeholder */}
          <div className="w-1/2 h-8 bg-gray-200 rounded mb-6"></div>

          {/* Button Placeholder */}
          <div className="w-full h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
