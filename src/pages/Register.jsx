import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const Register = () => {
  const initialValues = {
    password: "",
    email: "",
    name: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>
          <p>
            You already have an account?<Link to="/login">Login!</Link>
          </p>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
