import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../../redux/contacts/slice";
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const dispatch = useDispatch();

  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong! Try again...</h2>}
      <ul className={s.list}>
        {filteredContacts.map((item) => (
          <Contact key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
