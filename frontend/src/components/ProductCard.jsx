import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product, index, userId }) => {
  const isRanked = index < 3;
  const rankImage =
    index === 0
      ? "/assets/images/grade1.png"
      : index === 1
      ? "/assets/images/grade2.png"
      : "/assets/images/grade3.png";

  if (product) {
    return null;
  }

  return (
    <div className="flex w-full md:w-[32%] flex-col relative mb-[60px] group">
      {/* Ranking Badge */}
      {isRanked && (
        <div className="absolute top-[-20px] left-[-12px] z-10 w-[67px] h-[100px]">
          <Image
            src={rankImage}
            alt={`Rank ${index + 1}`}
            width={67}
            height={100}
            className="object-contain"
          />
        </div>
      )}

      {/* Thumbnail */}
      <div className="w-full flex justify-center items-center mb-5 rounded-[20px] overflow-hidden min-h-[345px] bg-gray-50">
        {/* Use Link if clicking image should go to product, matching typical UX, though original didn't wrap image in link explicitly in the map */}
        <Image
          width={300}
          height={300}
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="font-bold text-2xl text-left text-[#8f121a] flex items-center mb-1 font-[hiraginoSansGBW3]">
        {product.title}
      </h3>

      {/* Package */}
      <div className="text-lg text-left text-[#6e6e6e] mb-1 font-[snellRoundhand] font-serif italic">
        {product.package}
      </div>

      {/* Description */}
      <p className="text-[15px] text-left text-black mb-5 font-[hiraginoMinchoProN]">
        {product.description}
      </p>

      {/* Price Section */}
      <div className="flex justify-between items-center mt-auto">
        <div className="flex flex-col items-end">
          <div className="w-[176px] h-[28px] bg-[#a37120] rounded-[4px] flex justify-center items-center mb-2 text-white text-sm tracking-[0.1em] font-[hiraginoMinchoProN]">
            特別限定価格
          </div>
          <p className="flex justify-end items-end font-[hiraginoMinchoProN] text-[26px] text-right text-[#d85f5f]">
            {parseInt(product.price_sell).toLocaleString("en-US")}
            <span className="text-sm ml-1 select-none">(税込)</span>
          </p>
        </div>

        {/* Action Button */}
        <Link
          href={`/products/${userId}/${product.id}`}
          className="flex justify-center items-center w-[207px] h-[65px] text-[17px] text-white font-[hiraginoMinchoProN] bg-[url('/assets/images/btn_banner.png')] bg-center bg-no-repeat bg-contain hover:opacity-90 transition-opacity"
        >
          今すぐ購入する
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
