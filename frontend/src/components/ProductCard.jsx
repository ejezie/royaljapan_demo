"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const ProductCard = ({ product, index, userId }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Rank Logic
  const isRanked = index < 3;
  const rankImage =
    index === 0
      ? "/assets/images/grade1.png"
      : index === 1
      ? "/assets/images/grade2.png"
      : "/assets/images/grade3.png";

  if (!product) return null;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Calculate rotation (-10 to 10 degrees) for a subtle 3D tilt
    const rotateY = (x - 0.5) * 12;
    const rotateX = (0.5 - y) * 12;

    setMousePosition({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="group relative w-full mb-8"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          relative w-full bg-white rounded-2xl overflow-hidden
          border border-neutral-100
          transition-all duration-300 ease-out
          ${isHovered ? 'shadow-2xl shadow-neutral-200/50 z-10' : 'shadow-lg shadow-neutral-100/50 z-0'}
        `}
        style={{
          transform: isHovered 
            ? `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: "preserve-3d",
        }}
      >
        {/* Rank Badge */}
        {isRanked && (
          <div 
             className="absolute top-0 left-3 z-20 w-14 h-auto drop-shadow-lg"
             style={{ 
               transform: "translateZ(30px)", // Pop out effect
               transition: "transform 0.3s ease" 
             }}
          >
             <Image
              src={rankImage}
              alt={`Rank ${index + 1}`}
              width={56}
              height={80}
              className="object-contain"
            />
          </div>
        )}

        <Link href={`/products/${userId}/${product.id}`} className="block relative aspect-[4/3] overflow-hidden bg-neutral-50 group-image-link">
             <Image
              width={500}
              height={400}
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine Effect on Image */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-[200%] transition-transform duration-700 ${isHovered ? 'animate-shine' : ''}`}
              style={{ transform: isHovered ? 'translateX(200%)' : 'translateX(-200%)', transition: 'transform 1s ease-in-out' }}
            />
        </Link>
        
        {/* Content */}
        <div className="p-6 flex flex-col items-center text-center bg-white relative z-10" style={{ transform: "translateZ(20px)" }}>
            {/* Special Price Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-[11px] font-bold tracking-wider text-rose-700 bg-rose-50 rounded-full border border-rose-100 uppercase">
               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
               特別限定価格
            </span>

            {/* Package */}
             {product.package && (
              <p className="text-xs text-neutral-400 font-serif italic mb-1.5 tracking-widest">
                {product.package}
              </p>
            )}

            {/* Title */}
             <Link href={`/products/${userId}/${product.id}`}>
               <h3 className="text-lg font-bold text-neutral-800 mb-3 line-clamp-1 group-hover:text-rose-800 transition-colors font-[hiraginoSansGBW3] tracking-tight">
                 {product.title}
               </h3>
             </Link>

             {/* Description */}
             <p className="text-xs leading-relaxed text-neutral-500 mb-5 line-clamp-2 px-1 font-[hiraginoMinchoProN]">
                {product.description}
             </p>

             {/* Price */}
             <div className="mb-6 flex items-baseline gap-1.5 border-b border-neutral-100 pb-4 w-full justify-center">
                <span className="text-2xl font-bold text-rose-600 font-[hiraginoMinchoProN] tracking-tight">
                  ¥{parseInt(product.price_sell).toLocaleString("en-US")}
                </span>
                <span className="text-xs text-neutral-400 font-normal">(税込)</span>
             </div>

             {/* Button */}
              <Link
              href={`/products/${userId}/${product.id}`}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-neutral-900 text-white rounded-xl text-sm font-medium transition-all duration-300 hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-700/30 group/btn overflow-hidden relative"
             >
                <span className="relative z-10 font-[hiraginoSansGBW3]">今すぐ購入する</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-200%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
