import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const FeedbackRegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short! Min 3 items")
    .max(50, "Too Long! Max 50 items")
    .required("Required"),

  email: Yup.string().email("Must be a valid email!").required("Required"),

  password: Yup.string()
    .min(7, "Too Short! Min 7 items")
    .max(15, "Too Long! Max 15 items")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackRegistrationSchema}
    >
      <Form autoComplete="off" className={css.container}>
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
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
          Register
        </button>
      </Form>
    </Formik>
  );
}
