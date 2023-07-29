function Contact({ name, email, number, url, date, catagory }) {
  return (
    <>
      <div className='mt-4 py-2 border-b border-gray-300'>
        <div className='flex items-center'>
          <div className='flex gap-4 items-center'>
            <img
              className='object-cover h-20 rounded-full'
              src={url ? url : 'https://cutt.ly/vwackc2u'}
              alt='Avatar'
            />
            <div>
              <p
                className='mx-2 font-semibold text-xl text-gray-700 dark:text-gray-200'
                tabIndex='0'
                role='link'
              >
                {name} | {catagory}
              </p>
              <a
                href={`tel:${number}`}
                className='mx-2 font-semibold text-2xl text-gray-700 dark:text-gray-200 inline-block'
                tabIndex='0'
                role='link'
              >
                {number}
              </a>
              <a
                href={`mailto:${email}`}
                className='mx-2 font-semibold text-xl text-gray-700 dark:text-gray-200 inline-block'
                tabIndex='0'
                role='link'
              >
                {email}
              </a>
            </div>
          </div>
          <span className='mx-1 text-md text-gray-600 dark:text-gray-300'>
            {date}
          </span>
        </div>
      </div>
    </>
  );
}

export default Contact;
