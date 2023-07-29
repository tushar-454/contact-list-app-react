function Input({ text, type, placeholder, name, value, handler }) {
  return (
    <>
      <div className='flex-1 px-2 mt-4 md:mt-0'>
        <label className='block mb-2 text-xl text-gray-600 dark:text-gray-200'>
          {text}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handler}
          className='block w-full text-lg px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
        />
      </div>
    </>
  );
}

export default Input;
