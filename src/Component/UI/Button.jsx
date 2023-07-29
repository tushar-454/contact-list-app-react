function Button({ text, value, handleClick }) {
  return (
    <>
      <button
        value={value}
        onClick={handleClick}
        className='px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
      >
        {text}
      </button>
    </>
  );
}

export default Button;
