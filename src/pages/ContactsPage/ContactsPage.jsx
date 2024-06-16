import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {
  selectCurrentContact,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import EditForm from "../../components/EditForm/EditForm";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const isCurrentContact = useSelector(selectCurrentContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PageTitle>Phonebook</PageTitle>
      {isCurrentContact ? <EditForm /> : <ContactForm />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <SearchBox />
      <ContactList />
    </div>
  );
}
