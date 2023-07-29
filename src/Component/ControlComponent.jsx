import { useState } from 'react';
import Input from './UI/Input';

import Title from './UI/Title';

function ControlComponent({ contacts, getFiltered }) {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const searchCB = (contact) =>
    contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

  let filteredContacts = [];

  if (filter === 'all') {
    filteredContacts = contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.catagory === filter
    );
  }

  const handleClick = (e) => {
    setFilter(e.target.value);
    getFiltered(filteredContacts);
  };

  return (
    <>
      {/* filter control contact list  */}
      <div>
        <Title text='Filter & Search Your Contact' />
        <div className='px-4 mt-4 md:mt-0'>
          <select
            onChange={handleClick}
            value={filter}
            class='select w-full max-w-xs'
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
    </>
  );
}

export default ControlComponent;
