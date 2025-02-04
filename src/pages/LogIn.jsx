import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const LogIn = () => {
  const initialValues = {
    password: "",
    email: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div className="log-box">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Log In</button>
          <p>
            You do not have an account?<Link to="/register">Go to create!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LogIn;
