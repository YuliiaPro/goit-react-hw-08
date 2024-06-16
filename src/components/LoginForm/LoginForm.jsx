import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const FeedbackLoginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),

  password: Yup.string()
    .min(7, "Too Short! Min 7 items")
    .max(15, "Too Long! Max 15 items")
    .required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackLoginSchema}
    >
      <Form autoComplete="off" className={css.container}>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
