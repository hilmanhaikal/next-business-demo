// components/Button.tsx
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }
  
  export default function Button({ children, onClick, className }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 ${className}`}
      >
        {children}
      </button>
    );
  }