import { useState } from 'react';
import Input from './UI/Input';

const inputStateInit = {
  name: '',
  email: '',
  number: '',
  url: '',
  catagory: '',
  date: new Date(),
};

function InputComponent({ getContact }) {
  const [inputState, setInputState] = useState({ ...inputStateInit });

  const handleSubmit = (event) => {
    event.preventDefault();
    getContact(inputState);
    setInputState(inputStateInit);
  };

  // handle input state button click
  const handleCreateContact = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
      date: new Date(),
    });
  };

  return (
    <>
      <section className='w-full lg:w-[40rem]'>
        {/* create a contact stayle */}
        <div className='p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8'>
          <form onSubmit={handleSubmit}>
            <Input
              text='Full Name'
              type='text'
              name='name'
              placeholder='John Dou'
              value={inputState.name}
              handler={handleCreateContact}
            />
            <Input
              text='Email Address'
              type='email'
              name='email'
              placeholder='johndoe@example.com'
              value={inputState.email}
              handler={handleCreateContact}
            />
            <Input
              text='Number'
              type='tel'
              name='number'
              placeholder='+971234453434'
              value={inputState.number}
              handler={handleCreateContact}
            />
            <Input
              text='Image Url'
              type='url'
              name='url'
              placeholder='https://www.images.com/profile'
              value={inputState.url}
              handler={handleCreateContact}
            />
            {/* select input box  */}
            <div className='flex-1 px-2 mt-4 md:mt-0'>
              <label className='block mb-2 text-xl text-gray-600 dark:text-gray-200'>
                Select Catagory
              </label>
              <select
                name='catagory'
                value={inputState.catagory}
                onChange={handleCreateContact}
                className='block w-full text-lg px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border outline-none border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
              >
                <option value=''>Select a Catagory</option>
                <option value='personal'>Personal</option>
                <option value='home'>Home</option>
                <option value='mobile'>Mobile</option>
                <option value='office'>Office</option>
              </select>
            </div>
            {/* create button  */}
            <button className='w-full px-6 py-3 mt-4 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
              Create a contact
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default InputComponent;
