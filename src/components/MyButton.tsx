interface IButton {
  size: "md" | "lg" | "xl";
  children: string;
}

const MyButton = ({ size, children }: IButton) => {
  const sizeClasses = {
    md: "px-4 py-2 rounded-md text-base",
    lg: "px-5 py-3 rounded-lg text-lg hover:bg-red-500",
    xl: "px-6 py-4 rounded-xl text-xl bg-gray-300 hover:bg-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-gray-600 active:bg-gray-900"
  }[size];

  return (
    <button type="button" className={`font-bold ${sizeClasses}`}>
      {children}
    </button>
  );
};

export default MyButton;