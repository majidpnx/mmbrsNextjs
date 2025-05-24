export const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
