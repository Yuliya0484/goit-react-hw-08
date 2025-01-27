import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Це поле обовʼязкове!"),
    number: Yup.string()
      .min(7, "Мінімум 7 символів")
      .max(13, "Максимум 13 символів")
      .required("Це поле обовʼязкове!"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name: </span>
            <Field
              className={s.input}
              name="name"
              type="text"
              placeholder="Enter name"
            />
            <ErrorMessage name="name" className={s.error} component="div" />
          </label>
          <label className={s.label}>
            <span>Number: </span>
            <Field
              className={s.input}
              name="number"
              type="text"
              placeholder="Enter phone number"
            />
            <ErrorMessage name="number" className={s.error} component="div" />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
