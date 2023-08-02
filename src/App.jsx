import { useState } from 'react';
import ContactList from './Component/ContactList';
import InputComponent from './Component/InputComponent';
import Title from './Component/UI/Title';

function App() {
  const [contacts, setContacts] = useState([]);
  const getContact = (contact, setInputState, inputStateInit) => {
    if (!contact.name || !contact.email || !contact.number) {
      alert('Fillup all box with right data');
      return;
    } else {
      setInputState(inputStateInit);
    }
    setContacts([].concat(contacts, contact));
    console.log(contacts);
  };
  return (
    <>
      <div>
        <Title text='Contact List Application' />
      </div>
      <div className='flex flex-col lg:flex-row gap-20 justify-center items-start'>
        <InputComponent getContact={getContact} />

        <section className='p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8'>
          <ContactList contacts={contacts} />
        </section>
      </div>
    </>
  );
}

export default App;
