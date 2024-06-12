import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short! Min 3 items")
    .max(50, "Too Long! Max 50 items")
    .required("Required"),

  number: Yup.string()
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, "Number's format is xxx-xx-xx")
    .required("Required"),
});

export default function ContactForm() {
  const fieldId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <label htmlFor={`${fieldId}-name`}>Name</label>
        <Field type="text" name="name" id={`${fieldId}-name`} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.space} htmlFor={`${fieldId}-number`}>
          Number
        </label>
        <Field type="text" name="number" id={`${fieldId}-number`} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
