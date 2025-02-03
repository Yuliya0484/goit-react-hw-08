//import { PiAddressBookDuotone } from "react-icons/pi";
//import ContactForm from "./components/ContactForm/ContactForm";
//import SearchBox from "./components/SearchBox/SearchBox";
//import ContactList from "./components/ContactList/ContactList";
//import { useDispatch } from "react-redux";
//import { useEffect } from "react";
//import { fetchContacts } from "./redux/contactsOps";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const LogIn = lazy(() => import("./pages/LogIn"));
const Register = lazy(() => import("./pages/Register"));
const PhoneBook = lazy(() => import("./pages/PhoneBook"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    //     <div className="phonebook-box">
    //       {/* <h1 className="phonebook-title">
    //         Phonebook
    //         <PiAddressBookDuotone className="icon" />
    //       </h1> */}
    //       {/* <ContactForm />
    //       <SearchBox />
    //       <ContactList /> */}
    //  </div>
    <Suspense>
      <Routes>
        <Route path="/" elements={<Layout />}>
          <Route index element={<Home />} />
          <Route path="phonebook" element={<PhoneBook />} />
        </Route>

        <Route path="/login" element={<LogIn />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
