import React, { useState } from 'react';
import Contact from './UI/Contact';
import Input from './UI/Input';
import Title from './UI/Title';

function ContactList({ contacts }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const searchCB = (contact) =>
    contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

  let filteredContacts = [];

  if (filter === 'all') {
    filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.catagory === filter
    );
  }

  const handleChange = (e) => {
    setFilter(e.target.value);
    getFiltered(filteredContacts);
  };

  return (
    <>
      <section>
        <div>
          <Title text='Filter & Search Your Contact' />
          <div className='px-4 mt-4 md:mt-0'>
            <select
              value={filter}
              onChange={handleChange}
              className='select w-full max-w-xs'
            >
              <option value='all' selected>
                Pick your favorite Simpson
              </option>
              <option value=''>None</option>
              <option value='personal'>Personal</option>
              <option value='home'>Home</option>
              <option value='mobile'>Mobile</option>
              <option value='office'>Office</option>
            </select>
            <div>
              <Input
                type='search'
                placeholder='search your contact'
                value={searchTerm}
                handler={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div>
        <Title text='filtered' />
        <div className='flex-1 px-4 my-4 md:mt-0 h-[450px] overflow-y-scroll'>
          {filteredContacts.length == 0 ? (
            <p className='text-lg text-white'>There are no contact </p>
          ) : (
            filteredContacts.map((contact, index) => (
              <Contact
                key={index}
                name={contact.name}
                email={contact.email}
                url={contact.url}
                number={contact.number}
                date={contact.date.toLocaleTimeString()}
                catagory={contact.catagory}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ContactList;
