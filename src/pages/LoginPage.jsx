import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../redux/auth/operations";

const LoginPage = () => {
  const initialValues = {
    password: "",
    email: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
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

export default LoginPage;
