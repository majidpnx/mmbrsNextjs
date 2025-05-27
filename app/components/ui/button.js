const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-black",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
};

export const Button = ({ children, onClick, className = "", variant = "primary", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} px-5 py-2 rounded-lg transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};