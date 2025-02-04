import { PiAddressBookDuotone } from "react-icons/pi";

import ContactList from "../components/ContactList/ContactList";

const PhoneBook = () => {
  return (
    <div className="phonebook-box">
      <h1 className="phonebook-title">
        Phonebook
        <PiAddressBookDuotone className="icon" />
      </h1>
      {/* <ContactForm />
          <SearchBox />*/}
      <ContactList />
    </div>
  );
};

export default PhoneBook;
