export default function Button({ children, onClick, variant = "primary" }) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const styles = {
    primary: `${base} bg-purple-600 text-white hover:bg-purple-700`,
    secondary: `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`,
    outline: `${base} border border-gray-400 text-gray-700 hover:bg-gray-100`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}
