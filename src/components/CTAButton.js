// components/CTAButton.js
import Link from 'next/link';

const CTAButton = ({ href, target, variant = 'primary', children, className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95";
  let variantStyles = "";

  if (variant === 'primary') {
    variantStyles = "bg-yellow-400 text-gray-900 hover:bg-yellow-500";
  } else if (variant === 'secondary') {
    variantStyles = "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20";
  }

  return (
    <Link href={href} target={target} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default CTAButton;
