const ProductSkeleton = () => {
  return (
    <div className="flex w-full md:w-[32%] flex-col relative mb-[60px] animate-pulse">
      {/* Ranking Badge Placeholder */}
      <div className="absolute top-[-20px] left-[-12px] z-10 w-[67px] h-[100px] bg-gray-200 rounded-md"></div>

      {/* Thumbnail Placeholder */}
      <div className="w-full flex justify-center items-center mb-5 rounded-[20px] overflow-hidden h-[345px] bg-gray-200"></div>

      {/* Title Placeholder */}
      <div className="h-8 bg-gray-200 w-3/4 mb-2 rounded"></div>

      {/* Package Placeholder */}
      <div className="h-6 bg-gray-200 w-1/2 mb-2 rounded"></div>

      {/* Description Placeholder */}
      <div className="h-4 bg-gray-200 w-full mb-1 rounded"></div>
      <div className="h-4 bg-gray-200 w-full mb-1 rounded"></div>
      <div className="h-4 bg-gray-200 w-2/3 mb-5 rounded"></div>

      {/* Price Section Placeholder */}
      <div className="flex justify-between items-center mt-auto">
        <div className="flex flex-col items-end gap-2">
          <div className="w-[176px] h-[28px] bg-gray-200 rounded-[4px]"></div>
          <div className="w-[100px] h-[30px] bg-gray-200 rounded"></div>
        </div>

        {/* Action Button Placeholder */}
        <div className="w-[207px] h-[65px] bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
