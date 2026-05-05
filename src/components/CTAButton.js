// components/CTAButton.js
import Link from 'next/link';

const CTAButton = ({ href, target, variant = 'primary', children, className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95";
  let variantStyles = "";

  if (variant === 'primary') {
    variantStyles = "bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent";
  } else if (variant === 'secondary') {
    variantStyles = "bg-transparent text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800";
  }

  return (
    <Link href={href} target={target} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default CTAButton;
